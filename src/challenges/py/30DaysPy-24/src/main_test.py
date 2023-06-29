from main import MyList
from importlib import reload, import_module
import shutil


def test_map_method():
  myList = MyList()
  myList.append(1)
  myList.append(2)
  myList.append(3)

  newArray = myList.map(lambda element: element * 2)
  assert newArray.data == {0: 2, 1: 4, 2: 6}
  assert newArray.length == 3

def test_filter_method():
  myList = MyList()
  myList.append(1)
  myList.append(2)
  myList.append(3)

  newArray = myList.filter(lambda element: element % 2 == 0)
  assert newArray.data == {0: 2}
  assert newArray.length == 1

def test_append_method():
  myList = MyList()
  myList.append(1)
  myList.append(2)
  myList.append(3)

  myList.append(4)
  assert myList.data == {0: 1, 1: 2, 2: 3, 3: 4}
  assert myList.length == 4

def test_pop_method():
  myList = MyList()
  myList.append(1)
  myList.append(2)
  myList.append(3)

  poppedItem = myList.pop()
  assert poppedItem == 3
  assert myList.data == {0: 1, 1: 2}
  assert myList.length == 2

def test_join_method_with_default_character():
  myList = MyList()
  myList.append(1)
  myList.append(2)
  myList.append(3)

  joinedString = myList.join()
  assert joinedString == "1,2,3"

def test_join_method_with_custom_character():
  myList = MyList()
  myList.append(1)
  myList.append(2)
  myList.append(3)

  joinedString = myList.join("|")
  assert joinedString == "1|2|3"

def test_shift_method():
  myList = MyList()
  myList.append(1)
  myList.append(2)
  myList.append(3)

  shiftedItem = myList.shift()
  assert shiftedItem == 1
  assert myList.data == {0: 2, 1: 3}
  assert myList.length == 2

def test_unshift_method():
  myList = MyList()
  myList.append(1)
  myList.append(2)
  myList.append(3)

  myList.unshift(0)
  assert myList.length == 4