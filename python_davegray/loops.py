names = ['butoy', 'max', 'ambos']
actions = ['bark' ,'eat' , 'sleep']

class Pet:
    def __init__(self,name,actions,color):
        self.name = name
        self.action =actions
        self.color = color



# for action in actions:
#     for name in names:
#         print(f'{name} {action}')

# using enumerate


for i, name in enumerate(names):
    print(f'{i}. {name}')
 

 # checking substring
 
lyrics_strings = "i wish you were here"

is_lyrics = "i" in lyrics_strings
if is_lyrics:
    print('Found!')
else:
    print('Not Found!')
count_words = len(lyrics_strings.split())
print(count_words)