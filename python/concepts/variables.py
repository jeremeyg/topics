name = "JEremy"
age = 34
is_active: bool = True

print(name, age)
print(f"hello my name is {name}, i am currently looking for a web dev entry level position: {is_active}")

name= str('name')
print(name)

bob: str ='Bob'
print(bob)
# traffic light


#constatnts
from typing import Final
VERSION: Final[str] = '1.0.12'
PO: Final[float] = 3.145

#6. reusable codes
#from datetime import datetime
from datetime import datetime
def show_date() -> None:    
    print('This is the current time:')
    print(datetime.now())

show_date()

def greet(name: str)-> None:
    print(f'Hello, {name}')
greet('Me')

def add(a:float, b:float):
    return a +b
print(add(1,2))

#7 classes class is a blueprint of code
class Car:
    def __init__(self,brand: str, colour:str, hoursepower: int)-> None:
       self.brand = brand
       self.colour = colour
       self.horsepower = hoursepower

    def drive(self) -> None:
         print(f'{self.brand} is driving')

    def get_info(self)-> None:
        print(f'{self.brand} with {self.horsepower} horsepower')

        #only get the string
    def __str__(self)-> str:
        return(f'{self.brand},{self.colour}, {self.horsepower}')
    
    
volvo: Car =  Car('volvo','red', 200)
volvo.drive()
volvo.get_info()
print(volvo)
#method
#list, tupple, set, dict
