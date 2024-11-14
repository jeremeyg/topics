# String Manipulation Exercises
# Count Vowels Without Spaces:
def count_vowels(so):
    count = 0
    vowels = 'aeiou'

    for s in so.lower():
        if s in vowels:
            count += 1
    return count



so = " Count Vowels Without Spaces:"
so_result = count_vowels(so)
print(so_result)

# Write a function that counts the number of vowels in a string while ignoring spaces.
# Count Consonants:
def counter(sc):
    count_vowels = 0
    count_consonants = 0
    vowels = "aeiou"
    for si in sc.lower():
        if si.isalpha:
            if si in vowels:
                count_vowels += 1
            else:
                count_consonants += 1
    return count_vowels, count_consonants




sc = " Count Vowels Without Spaces:"
sc_result = counter(sc)
print(f'{sc_result[0]} {sc_result[1]}')

# Create a function that counts the number of consonants in a string, excluding spaces and punctuation.
# Count Digits:

def count_digits(sd):
    count = 0
    for s in sd.lower():
        if s.isalpha:
            count += 1
    return count
sd = " Count Vowels Without Spaces:"
sd_result = count_digits(sd)
print(f'{sd_result}')   

# Write a function that counts the number of numeric digits (0-9) in a string, ignoring letters and spaces.
# Count Unique Characters:

def count_uniq_char(su):
    unique_digits = set()
    numercs = "0123456789"
    for s in su:
        if s  in numercs:
            unique_digits.add(s)
    return len(unique_digits)

su ="12as5d6786qwe123123123"
su_result = count_uniq_char(su)
print(su_result)


# Write a function that counts unique characters in a string (ignoring spaces and case). Return the count and a list of unique characters.
# Reverse a String Without Spaces:

# Create a function that reverses a string while ignoring spaces. For example, "Hello World" should return "dlroWolleH".
# Count Words Ignoring Punctuation:

# Write a function that counts the number of words in a string while ignoring punctuation. Words are defined as sequences of characters separated by spaces.
# Count Uppercase and Lowercase Letters:

# Create a function that counts how many uppercase and lowercase letters are in a string, ignoring spaces and digits.
# Create a Frequency Dictionary:

# Write a function that returns a dictionary with the frequency of each character in a string, ignoring spaces.
# Remove All Digits:

# Create a function that removes all numeric digits from a string and returns the modified string.
# Check for Balanced Parentheses:

# Write a function that checks if parentheses in a string are balanced (i.e., every opening parenthesis has a corresponding closing parenthesis).
# Bonus Challenge
# Find Longest Substring Without Spaces:

# Write a function that finds the longest substring of non-space characters in a string.
# Count Palindrome Substrings:

# Create a function that counts how many palindromic substrings are present in a given string, ignoring spaces.
# Anagram Count:

# Write a function that checks if two given strings are anagrams of each other, ignoring spaces and case.