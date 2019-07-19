
import random, time, os


def get_dict(wordlist, split)-> dict:
    dic = {}
    line = wordlist.split("\n")
    line.remove("")
    for l in line:
        dic[l.split(split)[0]] = l.split(split)[1]
    
    return dic


def get_word() -> str:
    pos0 = str(random.randint(1, 4))
    pos1 = str(random.randint(0, 5))
    pos2 = str(random.randint(0, 9))
    pos3 = str(random.randint(0, 9)) 

    number = pos0 + pos1 + pos2 + pos3
    return number


with open("wordlist.txt", 'r') as f:
    wl = f.read()

ret_dict = get_dict(wl, " ")


random.seed(os.urandom(300))

while(True):
    size = 6
    i = 0
    senha = ""
    while(i < size):
        gen_number = get_word()
        gen_word =  ret_dict.get(gen_number)

        if(gen_word):
            senha += gen_word + " " 
            i += 1
        else:
            continue
    time.sleep(0.2)
    print(senha)
    

