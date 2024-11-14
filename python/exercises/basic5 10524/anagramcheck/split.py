def count_words(count_words):
    words = count_words.split(' ')
    word_count = 0
    for i in words:
        word_count+=1
    
    return word_count


result = count_words("Python is a great language")  # Output: 5
print(result)

def count(count_words):
    words = count_words.split()
    return len(words)

result_count = count('coffee for life everyday all day')
print(result_count)

#optimized

def count_word(count_words):
    words = count_words.split()
    return len(words)

print(f'result')