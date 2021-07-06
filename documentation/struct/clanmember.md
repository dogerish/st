# STClanMember
Structure representing a member of a clan.

## Constructor
```js
constructor(/*String*/ name, /*DateResolvable*/ lastseen)
```
### Arguments
1. `/*String*/ name`
	* The name of the member.
2. `/*DateResolvable*/ lastseen`
	* Something that represents the date at which the member was last seen.

## Properties
### name
String<br/>
The name of the member. Can be resolved into an [STPlayer](../class/player.md).
### lastseen
Date<br/>
The date at which the member was last seen.
