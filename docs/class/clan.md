# STClan extends [STAsync](async.md)
Class for clan information.

## Constructor
```js
constructor(/*String*/ tag)
```
### Arguments
1. `/*String*/ tag`
	* The tag used by the clan. Example: `!s]`

## Properties
### tag
String<br/>
The clan's tag.
### title
String<br/>
The title of the clan.
### website
String<br/>
A link to the clan's website.
### games
Array<[STGame](game.md)><br/>
The last 10 games that this clan participated in.
### members
Array<[STClanMember](../struct/clanmember.md)><br/>
The members of this clan.
### rank
Number<br/>
The rank of this clan among other clans.
### rate
Number<br/>
The win rate of this clan. `(wins + ties / 2) / totalGames`.
### points
Number<br/>
How many points the clan has. `(wins + ties / 2)^2 / totalGames`.
### wins
Number<br/>
How many games this clan won.
### losses
Number<br/>
How many games this clan lost.
### ties
Number<br/>
How many games this clan tied.
### totalGames
Number<br/>
Total number of games the clan has played.

## Methods
Overrides all needed functions to specification of [STAsync](async.md). Specific notes:
### fetch
#### Errors
Throws a [ClanNotFoundError](../utils/errors/clannotfounderror.md) if the clan is not found by the API.

## Static Methods
### list
```js
static async /*Array<STClan>*/ list()
```
Gets a list of all the clans and some info.
#### Return: Array<STClan>
Returns an array of all the clans with some info.
