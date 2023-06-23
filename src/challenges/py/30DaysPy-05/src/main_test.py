from main import get_student_average
from importlib import reload, import_module
import shutil

def reload_module(name):
  module = import_module(name)
  shutil.rmtree("__pycache__", ignore_errors=True)
  reload(module)
  return module

def test_students():
  students = [
    {
      "name": "Pedro",
      "grades": [90, 87, 88, 90],
    },
    {
      "name": "Jose",
      "grades": [99, 71, 88, 96],
    },
    {
      "name": "Maria",
      "grades": [92, 81, 80, 96],
    },
  ]
  
  rta = get_student_average(students)
  
  assert rta == {
    "class_average": 88.17,
    "students": [
      {
        "name": "Pedro",
        "average": 88.75
      },
      {
        "name": "Jose",
        "average": 88.5
      },
      {
        "name": "Maria",
        "average": 87.25
      }
    ]
  }
  
def test_class_average():
  students = [
    {
      "name": "Pedro",
      "grades": [90, 87, 88, 90],
    },
    {
      "name": "Jose",
      "grades": [99, 71, 88, 96],
    },
    {
      "name": "Maria",
      "grades": [92, 81, 80, 96],
    },
  ]

  rta = get_student_average(students)

  assert rta["class_average"] == 88.17

def test_students_with_less_grades():
  students = [
    {
      "name": "Pepe",
      "grades": [90, 87, 78],
    },
    {
      "name": "Jose",
      "grades": [78, 65, 92],
    },
    {
      "name": "Ximena",
      "grades": [71, 95, 75],
    },
    {
      "name": "Sergio",
      "grades": [90, 93, 80],
    },
    {
      "name": "Max",
      "grades": [96, 60, 89],
    }
  ]
  
  rta = get_student_average(students)
  
  assert rta == {
    "class_average": 82.6,
    "students": [
      {
        "name": "Pepe",
        "average": 85,
      },
      {
        "name": "Jose",
        "average": 78.33,
      },
      {
        "name": "Ximena",
        "average": 80.33,
      },
      {
        "name": "Sergio",
        "average": 87.67,
      },
      {
        "name": "Max",
        "average": 81.67,
      },
    ]
  }
  
def test_average_with_less_grades():
  students = [
    {
      "name": "Pepe",
      "grades": [90, 87, 78],
    },
    {
      "name": "Jose",
      "grades": [78, 65, 92],
    },
    {
      "name": "Ximena",
      "grades": [71, 95, 75],
    },
    {
      "name": "Sergio",
      "grades": [90, 93, 80],
    },
    {
      "name": "Max",
      "grades": [96, 60, 89],
    }
  ]
  
  rta = get_student_average(students)
  
  assert rta["class_average"] == 82.6
  