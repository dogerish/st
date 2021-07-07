# General Utilities
* [percent()](#percent)
* [getTeamsAndPlayers()](#getteamsandplayers)

## percent
```js
const percent = /*Number*/ (/*Number*/ n, /*Number*/ t) => Math.round(n / t * 100);
```
### Arguments
1. `/*Number*/ n`
	* The number that is the portion of `t`.
2. `/*Number*/ t`
	* The total number to get the percentage out of.
### Return: Number
Returns the rounded percentage of `n` out of `t`, as an integer from 0-100 (assuming `n` is between 0 and `t`).

## getTeamsAndPlayers
```js
function /*Array<Array<STTeam>, Array<STGamePlayer>>*/ getTeamsAndPlayers(
	/*Array<STTeamResolvable>*/ teams,
	/*Array<STGamePlayerResolvable>*/ players
)
```
### Arguments
1. `/*Array<STTeamResolvable>*/ teams`
	* The [STTeam](../struct/team.md)Resolvable objects to be converted. Properties: `name` and `score`.
2. `/*Array<STGamePlayerResolvable>*/ players`
	* The [STGamePlayer](../struct/gameplayer.md)Resolvable objects to be converted.
### Return: Array<Array<[STTeam](../struct/team.md)>, Array<[STGamePlayer](../struct/gameplayer.md)>>
An array containing two arrays: the first containing the teams, and the second containing the players.
