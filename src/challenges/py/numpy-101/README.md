### Your first NumPy array

Once you're comfortable with NumPy, you'll find yourself converting Python lists into NumPy arrays all the time for increased speed and access to NumPy's excellent array methods.

`sudoku_list` is a Python list containing a sudoku game:

```txt
[[0, 0, 4, 3, 0, 0, 2, 0, 9],
 [0, 0, 5, 0, 0, 9, 0, 0, 1],
 [0, 7, 0, 0, 6, 0, 0, 4, 3],
 [0, 0, 6, 0, 0, 2, 0, 8, 7],
 [1, 9, 0, 0, 0, 7, 4, 0, 0],
 [0, 5, 0, 0, 8, 3, 0, 0, 0],
 [6, 0, 0, 0, 0, 0, 1, 0, 5],
 [0, 0, 3, 5, 0, 8, 6, 9, 0],
 [0, 4, 2, 9, 1, 0, 3, 0, 0]]
```

You're going to change `sudoku_list` into a NumPy array so you can practice with it in later lessons, for example by creating a 4D array of sudoku games along with their solutions!