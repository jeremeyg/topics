users = ["dave" ," john", "sara"]

data = ['dave', 42, True]

emptylist = []

print("dave" in users)
#list starts with a 0 index

print(users[0])
print(users[0:2])
print(users[1:])
print(users.index('dave'))
print(len(users))

users.append('elsa')
print(users)

users += ["jason"]
print(users)

users.extend(["rober", "jimmy"])
print(users)