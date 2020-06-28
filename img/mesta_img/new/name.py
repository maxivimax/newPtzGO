import os
from tkinter import *
from tkinter import filedialog as fd
from tkinter import messagebox  


def selectDir():
    return fd.askdirectory()+'/'

def startRename(directory):
    directory1=directory.replace('/', '\\')
    files=sorted([path for path in os.listdir(directory) if os.path.isfile(directory+path)])
    i=1

    while files:
        file=files[0]
        ext=file.split('.')[-1]
        if not os.path.isfile(f'{directory}{i}.{ext}'):
            name = f'{i}.jpg'
            os.rename(directory1+file, directory1+name)
            del files[0]
        i+=1

def startpapaki():
            os.mkdir("crema-caffe")
            os.mkdir("cyber-club")
            os.mkdir("favoritehorze")
            os.mkdir("hide-and-see")
            os.mkdir("kitchen")
            os.mkdir("max")
            os.mkdir("motor")
            os.mkdir("musiem")
            os.mkdir("nakrishe")
            os.mkdir("norway-park")
            os.mkdir("forest-plaza")
            os.mkdir("promenade")
            os.mkdir("room")
            os.mkdir("tetris")

root = Tk()
root.geometry('400x75')
root.title("Это менятель имен в папаках!")

l1=Label(text='Хай) Ну это должно работать.... Надеюсь.... ')
l1.grid(row=0, column=0)

b1 = Button(text='Папака! Выбери папаку', command=lambda: startRename(selectDir()))
b1.grid(row=0,column=1)

b2 = Button(text='Создаем нужные папаки)', command=lambda: startpapaki())
b2.grid(row=2,column=1)

root.mainloop()  