def dictionary_with_lists(names):
    students = {
        'school': "Platzi",
        'names': "",
        'first_student': "",
        'last_student': "",
        'count': 0
    }

    students["names"] = names
    students["first_student"] = names[0]
    students["last_student"] = names[-1]
    students["count"] = len(names)

    return students


response = dictionary_with_lists(["Pepe", "Luis"])
print(response)
