# 1. Hello, World!
# Write a Python program to print "Hello, World!".

# Exercise 1
print("Hello, World!")


# 2. Basic Arithmetic
# Write a Python program that takes two numbers as input and prints their sum, difference, product, and division.


# Exercise 2
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))

print("Sum:", num1 + num2)
print("Difference:", num1 - num2)
print("Product:", num1 * num2)
print("Division:", num1 / num2)


# 3. Odd or Even
# Write a Python program that takes a number as input and prints whether it's odd or even.

# Exercise 3
num = int(input("Enter a number: "))

if num % 2 == 0:
    print(f"{num} is even.")
else:
    print(f"{num} is odd.")


# 4. Simple List Operations
# Create a list with 5 fruits. Print the first and last fruit in the list.


# Exercise 4
fruits = ["apple", "banana", "cherry", "orange", "grape"]
print(f"First fruit: {fruits[0]}")
print(f"Last fruit: {fruits[-1]}")


# 5. Check for a Value in a List
# Write a program to check if "banana" is in a list of fruits.


# Exercise 5
fruits = ["apple", "banana", "cherry"]
if "banana" in fruits:
    print("Banana is in the list.")
else:
    print("Banana is not in the list.")


# 6. String Reversal
# Write a Python program to reverse a string.

# Exercise 6
s = input("Enter a string: ")
print("Reversed string:", s[::-1])


# 7. Loop through a List
# Write a program to loop through a list of numbers and print each one.


# Exercise 7
numbers = [1, 2, 3, 4, 5]
for number in numbers:
    print(number)


# 8. Factorial
# Write a Python program to calculate the factorial of a number using a loop.


# Exercise 8
num = int(input("Enter a number: "))
factorial = 1

for i in range(1, num + 1):
    factorial *= i

print(f"Factorial of {num} is {factorial}")
# 9. Check for Prime Number
# Write a Python program to check if a number is a prime number.

# Exercise 9
num = int(input("Enter a number: "))

if num > 1:
    for i in range(2, num):
        if num % i == 0:
            print(f"{num} is not a prime number.")
            break
    else:
        print(f"{num} is a prime number.")
else:
    print(f"{num} is not a prime number.")

    
# 10. Count Vowels in a String
# Write a Python program that counts the number of vowels in a given string.

# Exercise 10
vowels = "aeiouAEIOU"
string = input("Enter a string: ")
count = 0

for char in string:
    if char in vowels:
        count += 1

print(f"Number of vowels: {count}")