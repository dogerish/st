# STMatch
A structure representing a theoretical player match-up. Takes a list of players as input and then is able to split those players up into "semi balanced teams". Details can be found [here](https://github.com/AngrySnout/SauerTracker/wiki/API-v1#apiplayersteams).

## Constructor
```js
constructor(/*String...*/ ...players)
```
### Arguments
The names of the players involved in this theoretical match.

## Properties
### players
Array<String><br/>
The players this is splitting up into teams.
### good
Array<String><br/>
An array of the players on team `good`.
### evil
Array<String><br/>
An array of the players on team `evil`.

## Methods
### teamsplit
```js
async /*STMatch*/ teamsplit()
```
Asynchronously calls the API in order to split [`this.players`](#players) up into the teams `good` and `evil`.
#### Return: STMatch
Returns this, which has the properties `good` and `evil` set accordingly.
