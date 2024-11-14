def reverse_string(s):
    # Your code here
    return s[::-1]

# Example:
print(reverse_string("hello"))  # Output: "olleh"



def list_sum(lst):
    # Your code here
    sum = 0
    for i in lst:
        sum+=i
    return sum

# Example:
print(list_sum([1, 2, 3, 4]))  # Output: 10


def count_letters(s):
    # Your code here
    output={}
    for i in s:
        if i in output:
            output[i] += 1
        else:
            output[i] = 1

    return output

    

# Example:
print(count_letters("hello"))  # Output: {'h': 1, 'e': 1, 'l': 2, 'o': 1}

def fibonacci(n):
    # Your code here
    result = []
    a,b = 0,1

    for i in range(n):#upto n numbers
        result.append(a) #append the current a
        a,b = b,a +b #updates a,b by for the next fibonnaci by shifting values
    return result

# Example:
print(fibonacci(5))  # Output: [0, 1, 1, 2, 3]

def is_palindrome(s):
    # Your code here
   return  s == s[::-1]
    

# Example:
print(is_palindrome("racecar"))  # Output: True

def is_prime(n):
    # Your code here
    if n <= 1:
        return False
    
    for i in range(2, int(n ** 0.5)+1): #divisors generate
        if n % i == 0:
            return False
    return True

# Example:
print(is_prime(11))  # Output: True



