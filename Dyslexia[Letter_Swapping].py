import random
import time
import sys
from termcolor import colored, cprint

text = "那隻狗開心地追著球跑。"
original_text = text

lineup = '\033[1A'
lineclear = '\x1b[2K'

def scrambler(a): 
    text = list(a.split())
    text_holder = []
    list_holder = []
    scrambled_list = []

    for i in range(len(text)):
        text_holder += text[0]
        length = len(text_holder)
        text = text[1:]
        splitted = [j for j in text_holder]
        text_holder = text_holder[length:]
        list_holder.append(splitted)

    #print(list_holder)


    for i in range(len(list_holder)):
        shuffled_list = random.sample(list_holder[i],len(list_holder[i]))
        scrambled_words = (''.join(shuffled_list))
        scrambled_list += [scrambled_words]
    #print(scrambled_list)
    scrambled_sentence = colored(' '.join(scrambled_list),'light_yellow')
    print(colored("Scrambled Text: ",'red') + scrambled_sentence,end = "\r")
    time.sleep(4)

print('', end = '\n')

for i in range(10):
    scrambler(text)

