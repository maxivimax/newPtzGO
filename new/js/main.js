// Modern JavaScript with ES6+ features

// Places data structure
const places = {
    razvl: [
        { name: 'Твой мир', image: './tvoimir/back.png', link: './mesta/tvoimir/tvoimir.html' },
        { name: 'Хорошее место', image: './img/Group21.png', link: './mesta/Good-place/Good-place.html' },
        { name: 'Нега', image: './img/nega.png', link: './mesta/Nega/Nega.html' },
        { name: 'Тетрис', image: './img/Group 17.png', link: './mesta/Tetris/Tetris.html' },
        { name: 'Боулинг', image: './img/bouling.png', link: './mesta/Bouling/Bouling.html' },
        { name: 'Лотос Плаза', image: './img/lotos_plaza.png', link: 'lotosplaza.html' },
        { name: 'Макси', image: './img/maksi.png', link: 'maksi.html' },
        { name: 'Парк Аттракционов', image: './img/rollercoaster.png', link: './mesta/Promenade/Promenade.html' },
        { name: 'Прятки В Темноте', image: './img/hideinthedark.png', link: './mesta/Hide-and-seek/Hide-and-seek.html' },
        { name: 'Cyber club', image: './img/cuber.png', link: './mesta/Cyber-club/Cyber-club.html' },
        { name: 'Картинг', image: './img/Group 8.png', link: './mesta/Motor/Motor.html' },
        { name: 'Favorit', image: './img/favorit.png', link: './mesta/Favorithours/Favorithours.html' },
        { name: 'Лазерфраг', image: './img/laserfrag.png', link: './mesta/Lazerfrag/Lazerfrag.html' }
    ],
    priroda: [
        { name: 'Norway парк', image: './img/norway_park.png', link: './mesta/Norway-park/Norway-Park.html' },
        { name: 'Пляж Пески', image: './img/peski.png', link: './mesta/Peskee/Peskee.html' },
        { name: 'Фонтаны', image: './img/fontani.png', link: './mesta/Fountain/Fountain.html' },
        { name: 'Лес за плазой', image: './img/park_plaza.png', link: './mesta/Park-plaza/Park-plaza.html' },
        { name: 'Беличий остров', image: './img/Group20.png', link: './mesta/Sqrierel-park/Squirrel-park.html' },
        { name: 'Скаладром', image: './img/skaloo.png', link: './mesta/Climbing-wall/Climbing-wall.html' }
    ],
    cafe: [
        { name: 'Беккер', image: './img/bekker.png', link: 'bekker.html' },
        { name: 'Артист', image: './img/actor.png', link: './mesta/Actor/Actor.html' },
        { name: 'Кухня', image: './img/Group 12.png', link: './mesta/Kitchen/Kitchen.html' },
        { name: 'Fusion', image: './img/Group 13.png', link: './mesta/Fusion/Fusion.html' },
        { name: 'Crema кафе', image: './img/crema.png', link: './mesta/Crema-caffe/Crema-caffe.html' }
    ],
    museum: [
        { name: 'Национальный музей', image: './img/Group 14.png', link: './mesta/Musiem/Musiem.html' },
        { name: 'Музей Кванториума', image: './ssdf.png', link: './mesta/kvant/kvant.html' }
    ]
};

// DOM Elements
const placesGrid = document.getElementById('places-grid');
const navTabs = document.querySelectorAll('.nav-tab');

// State management
let currentCategory = 'razvl';

// Utility functions
const createPlaceCard = (place) => {
    const card = document.createElement('a');
    card.href = place.link;
    card.className = 'place-card fade-in';
    
    card.innerHTML = `
        <img src="${place.image}" alt="${place.name}" loading="lazy">
        <div class="place-card-content">
            <h3 class="text-lg font-semibold">${place.name}</h3>
        </div>
    `;
    
    return card;
};

const renderPlaces = (category) => {
    placesGrid.innerHTML = '';
    places[category].forEach(place => {
        placesGrid.appendChild(createPlaceCard(place));
    });
};

const updateActiveTab = (category) => {
    navTabs.forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.category === category) {
            tab.classList.add('active');
        }
    });
};

// Event listeners
navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const category = tab.dataset.category;
        if (category !== currentCategory) {
            currentCategory = category;
            updateActiveTab(category);
            renderPlaces(category);
        }
    });
});

// Intersection Observer for lazy loading
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.1
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderPlaces(currentCategory);
    updateActiveTab(currentCategory);
    
    // Observe all place cards
    document.querySelectorAll('.place-card').forEach(card => {
        observer.observe(card);
    });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
}); 