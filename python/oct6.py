# Basic Exercises
# String Concatenation:


# Create two strings and concatenate them. Print the result.
# Substring Check:

# Write a function that checks if a substring exists within a given string.
# String Length:



# Write a program to find the length of a string without using the built-in len() function.
# Upper and Lower Case:

def length(s):
    count = 0
    dagko = ''
    for char in s:
      if char != ' ':
        count += 1
        if char.islower():
            dagko += char.upper()
        else:
            dagko += char.lower()
    
    return count, dagko
        


string_lyrics= 'i wish your were here'
check_length = length(string_lyrics)
print(check_length)




# Create a function that takes a string and returns it in uppercase and lowercase.
# Intermediate Exercises
# Reversing a String:

# Write a function that reverses a given string.
# Count Vowels:

# Write a program to count the number of vowels in a given string.
# Remove Whitespace:

# Create a function that removes all whitespace from a string.
# Palindrome Check:

# Write a function that checks if a string is a palindrome (reads the same forwards and backwards).
# Advanced Exercises
# Word Count:

# Write a program that counts the number of words in a string. Assume words are separated by spaces.
# Find and Replace:

# Create a function that replaces all occurrences of a specific word in a string with another word.
# String Compression:

# Write a function that compresses a string by replacing repeated characters with the character followed by its count (e.g., "aaabb" becomes "a3b2").
# Character Frequency:

# Create a function that returns a dictionary containing the frequency of each character in a string.
# Bonus Challenge
# Anagram Check:

# Write a function that checks if two strings are anagrams of each other (contain the same characters in different orders).
# Longest Substring Without Repeating Characters:

# Write a function that finds the length of the longest substring without repeating characters.
# String Transformation:

# Create a function that transforms a string by swapping its case (upper to lower and vice versa) for each character.