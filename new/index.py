import telebot
import time

print("GGG")

bot = telebot.TeleBot('1351828918:AAGZw4c9oiPng4NkVK2X6eyzaTYny7hU36U')
keyboard1 = telebot.types.ReplyKeyboardMarkup()
keyboard1.row('Привет', 'Ввести код для баллов')
keyboard1.row('Что такое баллы?', 'Доступные товары', 'Мой баланс')

@bot.message_handler(commands=['start'])
def start_message(message):
    user_id = message.from_user.id
    bot.send_message(message.chat.id, 'Привет, ты написал мне /start', reply_markup=keyboard1)

@bot.message_handler(content_types=['text'])
def send_text(message):
    user_id = message.from_user.id
    if message.text.lower() == 'привет':
        bot.send_message(message.chat.id, 'Привет, мой создатель')

    elif message.text.lower() == 'ввести код для баллов':
        user_id = message.from_user.id
        print("+")
        global fr
        keyboard1.row('Отмена')

        bot.register_next_step_handler(message, number_add)


    elif message.text.lower() == 'что такое баллы?':
        user_id = message.from_user.id
        bot.send_message(message.chat.id, 'Баллы нужны для покупки товаров. Их можно получить сдавая крышки от бутылок в наших аппаратах')
    elif message.text.lower() == 'доступные товары':
        user_id = message.from_user.id
        bot.send_message(message.chat.id, 'Пока пусто...')
    elif message.text.lower() == 'мой баланс':
        user_id = message.from_user.id
        fr = "Повторите запрос"
        try:
            kr = open(str(user_id) + ".txt", "r")
            fr = kr.read()
        except IOError:
            print ("No file")

            open(str(user_id) + '.txt', 'tw', encoding='utf-8')

            f1 = open(str(user_id) + ".txt", 'w')
            f1.write("0")

        bot.send_message(message.chat.id, 'Ваш баланс: ' + str(fr) + ' крышек')

def number_add(msg):
    user_id = msg.from_user.id
    msga = msg.text

    print(msg)

    try:
        kr = open(str(user_id) + ".txt", "r")
        fr = kr.read()
        baka = "1"
        if(fr == ""):
            print ("No file")

            open(str(user_id) + '.txt', 'tw', encoding='utf-8')

            f1 = open(str(user_id) + ".txt", 'w')
            f1.write("0")

        idNumber = int(fr) + int(msg) 
        # "НЕРЕШИМАЯ ЗАДАЧА"

        f1 = open(str(user_id) + ".txt", 'w')
        # Что надо было
        f1.write(str(idNumber))
    except IOError:
        print ("No file")

        open(str(user_id) + '.txt', 'tw', encoding='utf-8')

        f1 = open(str(user_id) + ".txt", 'w')
        f1.write("0")

bot.polling()