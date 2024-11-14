#1
def reverse_string(s):
    # Your code here
    return s[::-1]

# Example:
print(reverse_string("hello"))  # Output: "olleh"


#2
def list_sum(lst):
    # Your code here
    sum = 0
    for i in lst:
        sum += i
    return sum


# Example:
print(list_sum([1, 2, 3, 4]))  # Output: 10


#3
def count_letters(s):
    # Your code here
    output = {}
    for i in s:
        if i in output:
             output[i] += 1
        else:
            output[i] = 1
    return output


# Example:
print(count_letters("hello"))  # Output: {'h': 1, 'e': 1, 'l': 2, 'o': 1}

#4
def fibonacci(n):
    # Your code here
    result = []
    a,b = 0,1

    for i in range(n):
        result.append(a)
        a,b = b,a + b

    return result


# Example:
print(fibonacci(5))  # Output: [0, 1, 1, 2, 3]


#5
def is_palindrome(s):
    # Your code here
    if s[::-1] == s:
        return True
    else:
        return False

# Example:
print(is_palindrome("racecar"))  # Output: True

#6
def is_prime(n):
    # Your code here
    if n <= 0:
        return False
    
    for i in range(2,int(n ** 0.5)+1):
        if n % i == 0:
            return False
        return True



# Example:
print(is_prime(11))  # Output: True


#7
squares = [x**2 for x in range(1, 11)]
print(squares)  # Output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

#8
import random

def guessing_game():
    # Your code here
    pass

# guessing_game()


#9
def factorial(n):
    # Your code here
    pass

# Example:
print(factorial(5))  # Output: 120



#10. File Handling
#Task: Write a function write_to_file(filename, content) that writes the given content to a file, and a function read_from_file(filename) that reads and prints the content of the file.

def write_to_file(filename, content):
    # Your code here
    pass

def read_from_file(filename):
    # Your code here
    pass

# Example usage:
# write_to_file('example.txt', 'Hello, World!')
# read_from_file('example.txt')
