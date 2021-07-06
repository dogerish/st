# STLiveGame
Structure representing a live game, or a game which was in progress at the time it was fetched.

## Constructor
```js
constructor(/*Object*/ obj)
```
### Arguments
1. `/*Object*/ obj`
	* An Object containing the properties to take from:

| Type           | Property                                       |
| -------------- | ---------------------------------------------- |
| mapName        | String                                         |
| gameMode       | String                                         |
| gameType       | String                                         |
| timeLeft       | Number                                         |
| timeLeftString | String                                         |
| teams          | Array<[STTeam](team.md)Resolvable>             |
| players        | Array<[STGamePlayer](gameplayer.md)Resolvable> |

## Properties
### map
String<br/>
The name of the map.
### mode
String<br/>
The game mode.
### type
String<br/>
The type of game. See [STGame.type](../class/game.md#type).
### timeLeft
Number<br/>
How many total seconds are left in the game.
### timeLeftString
String<br/>
How much time is left in the game, expressed as a String. Ex: `4:20`.
### teams
Array<[STTeam](team.md)><br/>
An array of the teams playing.
### players
Array<[STGamePlayer](gameplayer.md)><br/>
An array of the players, including spectators.
