# Why uses classes?
# 1. Having rules around objects and what they can do
# 2. It's used in object-oriented programming
# 3. It expresses attributes of objects, in addition to actions

class Animal:

    def __init__(self, name):
        self.name = name

x = Animal(name="Tiger")
y = Animal(name="Lion")

print(x.name)
# print(self.name)
print(y.name)
# print(self.name)
