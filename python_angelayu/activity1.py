print(f'Welcome to the Band Name Generator.')
bill = float(input(f'What was the total of the bill?'))
print(bill)
tip = int(input('How much tip would you like to give? 10,12, or 15'))
print(tip)
split_people = int(input('How many people to split the bill?'))


bill_with_tip = bill * (1 + tip / 100)

bill_with_split = bill_with_tip / split_people

print(bill_with_split)