#1. string manipulation
#Write a function that takes a string and returns the first non-repeating character in it.

walong_bilyon = "paano nangyari sa akin nakatingin"

def check_non_repeating_string(s):
    list_strings = []
    for i in s: 
        if s.count(i) == 1:
           list_strings.append(i)
    return list_strings

print(check_non_repeating_string(walong_bilyon))

# For the string "paano nangyari sa akin nakatingin":

# The loop goes through each character like 'p', 'a', 'a', 'n', 'o', etc.
# For each character, it checks how many times it appears in the string.
# If the character appears only once (like 'p', 'o', 'r', 'k', 'g'), it gets added to the list.
# Finally, the list of non-repeating characters is returned and printed.

#2. Fibonacci Sequence (Recursion & Memoization)
# Write a function that generates the nth Fibonacci number using both recursion and memoization.


#3. fizz buzz fizzbuzz

def fizz_buzz():
    for s in range(1, 12):  # Loop from 1 to 11
        if s % 3 == 0 and s % 5 == 0:
            print("fizz, buzz")
        elif s % 3 == 0:
            print("fizz")
        elif s % 5 == 0:
            print("buzz")
        else:
            print(s)

fizz_buzz()


#4. Count Vowels in a String
# Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) present in the string.
def count_vowels(s):
    vowels = "aeiouAEIOU"
    count = 0
    for char in s:
        if char in vowels:
            count+=1

    return count

print(count_vowels("Hello World"))

def count_name(s):
    letter_count = {}
    for letter in s:
        if letter in letter_count:
            letter_count[letter] += 1
        else:
            letter_count[letter] = 1
        print(f"after processing {letter_count}, {letter}")
    return letter_count

names = ("sshael", "jeremy", "jeremiah")
result = count_name(names)

output = ' '.join(result)