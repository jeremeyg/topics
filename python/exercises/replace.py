
def replace_vowels(string, x):
    vowels = "aieouAEIOU"
    new_string = []

    for i in string:
        if i in vowels:
            new_string.append(x)
        else:
            new_string.append(i)
    return ''.join(new_string)
    

rp = replace_vowels("hello world", "*")  # Output: "h*ll* w*rld"
print(rp)
