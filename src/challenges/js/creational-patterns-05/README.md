Congratulations! The system implementation has been a success, the engineering team and you have done an amazing job!

Now it’s time from a last requirement: **`A rockets creation history`**. The idea is to have a record of all the rockets that have been created in an ordered list, containing only the names of the rockets.

However, there is an additional condition to meet: the history must be the same across all the factories. **`This means that only one instance of the history should exist`**.

Do you have any ideas on how to implement this?

## Implementation plan

1. Make `HistoryLog` class implements single instance strategy.

## Code Example

```js
const rocketsCreationHistory = HistoryLog.getInstance();

rocketsCreationHistory.addEntry({ msg: 'Galaxy-Rocket-Creation' });
rocketsCreationHistory.addEntry({ msg: 'Odissey-Rocket-Creation' });
const history = newRocketsCreationHistory.history;
console.log(history); // ['Galaxy-Rocket-Creation','Odissey-Rocket-Creation']

const newRocketsCreationHistory = HistoryLog.getInstance();
const history = newRocketsCreationHistory.history;
console.log(history); // ['Galaxy-Rocket-Creation','Odissey-Rocket-Creation']
```

## Resources

In the Resources section, you'll find links to Platzi classes that cover the tools and skills required to complete this task and an image that explains what the challenge tries to solve.
