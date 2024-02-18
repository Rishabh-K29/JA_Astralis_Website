import random
import time
import sys
from termcolor import colored, cprint

text = "Look out the window! It's raining heavily outside, with thunder rumbling in the distance."
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
    scrambled_sentence = colored(' '.join(scrambled_list),'white')
    print("                  " + str(scrambled_sentence),end = "\r")
    time.sleep(3)


print('', end = '\n')
print('', end = '\n')
for i in range(20):
    scrambler(text)

print("                                                                                                          ")
