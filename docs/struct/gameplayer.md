# STGamePlayer
Structure representing a player of a game.

## Constructor
```js
constructor(/*Object*/ obj)
```
### Arguments
1. `/*Object*/ obj`
	* The object to take properties from. This should be [STStats](stats.md)Resolvable and also have these properties:

| Type              | Property |
| ----------------- | -------- |
| String            | name     |
| Number            | state    |
| [STTeam](team.md) | team     |

## Properties
### name
String<br/>
The name of the player.
### state
Number<br/>
The state of the player.
| State | Meaning   |
|:-----:| --------- |
| 0     | Alive     |
| 1     | Dead      |
| 2     | Spawning  |
| 3     | Lagged    |
| 4     | Editing   |
| 5     | Spectator |

### stats
[STStats](stats.md)<br/>
The player's stats.
### team
[STTeam](team.md)<br/>
The team the player is on.
