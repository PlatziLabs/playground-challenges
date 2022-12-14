name = input('¿Cuál es tu nombre? => ')
print(name)
last_name = input('¿Cuál es tu apellido? => ')
print(last_name)
age = int(input('¿Cuál es tu edad? => '))
print(age)


template = f"Hola mi nombre es {name} {last_name}, tengo {age} años y en 10 años tendré {age + 10} años"
print(template)