# STGame extends [STAsync](async.md)
Class representing a game.

## Constructor
```js
constructor(/*Number*/ id)
```
### Arguments
1. `/*Number*/ id`
	* The SauerTracker game ID.

## Properties
### id
Number<br/>
The SauerTracker game ID.
### date
Date<br/>
The date when this game happened.
### server
[STServer](server.md)<br/>
The server used for the game.
### clients
Number<br/>
Number of clients that were present.
### teams
Array<[STTeam](../struct/team.md)><br/>
An array containing the teams that participated.
### players
Array<[STGamePlayer](../struct/gameplayer.md)><br/>
An array of the players involved, including spectators.
### meta
Array<String, Number><br/>
Metadata for this game. Possibilities known to me:
| [`this.type`](#type) | String      | Number |
| -------------------- | ----------- | ------ |
| clanwar              | clan tag    | score  |
| duel                 | player name | score  |

*Please add or notify me of any and all other possibilities you find.*
### mode
String<br/>
The game mode used for this game.
### type
String<br/>
The type of game this was. `public`, `duel`, `mix`, `clanwar`, `intern`, or `other`
### map
String<br/>
The name of the map this game was played on.

## Methods
To specification of [STAsync](async.md). Notes:
### fetch
#### Errors
Throws a [GameNotFoundError](../utils/errors/gamenotfounderror.md) if the game isn't found.

## Static Methods
### find
```js
static async /*STResults*/ find(/*String*/ host, /*Number*/ port)
```
Asynchronously finds up to 20 games that match the given query. Both arguments are optional. Results are sorted by frags descendingly.
#### Arguments
1. `/*String*/ host`
	* The host server of the game.
2. `/*Number*/ port`
	* The port of the server.
#### Return: [STResults](../struct/results.md)
The search results and stats.
