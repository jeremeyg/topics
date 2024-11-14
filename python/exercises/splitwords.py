def capitalize_words(sentence):
   for i in sentence:
       words = sentence.split()
       capitalize_words = [word.capitalize() for word in words]
       return ''.join(capitalize_words)

result = capitalize_words("hello world from python")  # Output: "Hello World From Python"
print(result)

