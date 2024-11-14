def are_anagrams(w1 ,w2):
    if sorted(w1) == sorted(w2):
        return True
    else:
        return False

print(are_anagrams("listen", "silent")  )# Output: True
print(are_anagrams("hello", "world")    )# Output: False
