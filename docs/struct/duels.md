# STDuels

## Constructor
```js
constructor(/*Number*/ count, /*Number*/ wins, /*Number*/ losses, /*Number*/ ties)
```
### Arguments
See [properties](#properties).

## Properties
### count
Number<br/>
Amount played.
### wins
Number<br/>
Amount won.
### losses
Number<br/>
Amount lost.
### ties
Number<br/>
Amount tied.

## Methods
### winRate
```js
/*Number*/  winRate()
```
#### Return: Number
Returns the percentage, as given by [percent()](../utils/general.md#percent), of [this.wins](#wins) out of [this.count](#count).
### lossRate
```js
/*Number*/ lossRate()
```
#### Return: Number
Same as with [this.winRate()](#winrate), but for [this.losses](#losses).
### tieRate
```js
/*Number*/  tieRate()
```
#### Return: Number
Same as with [this.winRate()](#winrate), but for [this.ties](#ties).
