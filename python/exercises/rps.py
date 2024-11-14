#Write a function that takes a string and returns the first non-repeating character in it.

def non_repeating_character(s):
    for i in s:
        if i.count(i) == 1:
            print(i.count(i))
            return i
    return None
    
print(non_repeating_character("sketchers"))


s = "system"
# print(s[::-1])
#count every letter

def count_letters(s):   
    letter_count = {}
    for i in s:
        if i in letter_count:
            letter_count[i] +=1
        else:
            letter_count[i] =1
    return letter_count

result = count_letters(s)
print(f'{result}')

for letter, count in result.items():
    print(f'{letter} : {count}')

#check palidrome