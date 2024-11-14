# 1. Hello, World!
# Write a Python program to print "Hello, World!".
movie_title = "Wish you were here."
print(movie_title)

# Exercise 8 || factorial

# num = int(input("Enter a number: "))
# factorial = 1

# for i in  range(1, num+1):
#     factorial *=1
# print(f'{num} is {factorial}')

def count_vowels(movie_title):
    vowels = "aeiouAEIOU"
    list_vowels = []
    count_vowels = 0

    for i in movie_title:
        if i in vowels:
            count_vowels+=1
            list_vowels.append(i)
    
    joined_vowels = ''.join(list_vowels)
    
    return count_vowels, joined_vowels
result = count_vowels(movie_title)
print(result)


