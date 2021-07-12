# STServerActivity
Structure for holding data on the day and month activity of a server.

## Constructor
```js
constructor(/*Array<Object>*/ day, /*Array<Object>*/ month)
```
### Arguments
1. `/*Array<Object>*/ day`
	* An array of objects with the following properties:

| Type           | Property   |
| -------------- | ---------- |
| DateResolvable | timestamp  |
| Number         | numplayers |

2. `/*Array<Object>*/ month`
	* An array of objects with the following properties:

| Type           | Property |
| -------------- | -------- |
| DateResolvable | date     |
| Number         | count    |

## Properties
### day
Array<[STActivity](activity.md)><br/>
The day activity of the server. Number of players at different times of today.
### month
Array<[STActivity](activity.md)><br/>
The month activity of the server. Number of games per day for the last 15 days.
