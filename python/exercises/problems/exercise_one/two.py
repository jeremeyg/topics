# 1. Hello, World!
# Write a Python program to print "Hello, World!".

greet = "Hello World!"
print(greet)
# 2. Basic Arithmetic
# Write a Python program that takes two numbers as input and prints their sum, difference, product, and division.

a,b = 4,2

print(f'sum: {a + b}')
print(f'difference: {a - b}')
print(f'multiplied: {a * b}')
print(f'division: {a / b}')


#3. Odd or Even
# Write a Python program that takes a number as input and prints whether it's odd or even.

def check_number(c):
    if c % 2 == 0:
        return 'its odd'
    else:
        return 'its even'

c = check_number(2)
print(c)
#4. Simple List Operations
# Create a list with 5 fruits. Print the first and last fruit in the list.
fruits = ["watermelon", "apple", "banana","guava", "pineapple"]

print(f'last fruit: {fruits[len(fruits)-1]}')


#5. Check for a Value in a List
# Write a program to check if "banana" is in a list of fruits.


if 'banana' in fruits:
    print('banana found!')
else:
    print('banana not found!')


# #6. String Reversal
# Write a Python program to reverse a string.

def reverse_string(s):
    return s[::-1]

print(reverse_string("android"))

#7. Loop through a List
# Write a program to loop through a list of numbers and print each one.
numbers = [10,20,30,40,50]
for num in numbers:
    print(num)

#8. Factorial
# Write a Python program to calculate the factorial of a number using a loop.

factorial = 1
for i in range(1,num+1):
    factorial *= i
print(f'factorial of {num} is {i}')
#9. Check for Prime Number
# Write a Python program to check if a number is a prime number.
num = 11

if num > 1:
    for n in range(2, num):
        if num % i == 0:
            print(f'{num} is not a prime number.')
            break
        else:
            print(f'{num} is a prime number.')


#10. Count Vowels in a String
# Write a Python program that counts the number of vowels in a given string.
