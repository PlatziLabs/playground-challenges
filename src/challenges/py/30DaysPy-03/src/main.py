def print_triangle(size, character):
<<<<<<< HEAD
    triangle = ""
    for i in range(1, size + 1):
        spaces = " " * (size - i)
        line = character * (2 * i - 1)
        if i == size:
         triangle += spaces + line
        else:   
         triangle += spaces + line + "\n"
    return triangle

print(print_triangle(3, "*"))
=======
    # Tu código aquí 👈
    pass
>>>>>>> creational
