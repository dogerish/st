# STServer extends [STAsync](async.md)
Class representing a server.

## Constructor
```js
constructor(/*String*/ host, /*Number*/ port)
```
### Arguments
1. `/*String*/ host`
	* The host or IP of the server.
2. `/*Number*/ port`
	* The port of the server.

## Properties
### host
String<br/>
The host or IP of the server.
### port
Number<br/>
The port of the server.
### description
String<br/>
The server's description.
### descriptionStyled
String<br/>
The description styled with html.
### clients
Number<br/>
The number of clients on the server.
### maxClients
Number<br/>
The maximum number of clients the server supports.
### isFull
Boolean<br/>
Whether or not the server is full.
### zombie
Boolean<br/>
Whether or not the server is a zombie server.
### game
[STLiveGame](../struct/livegame.md)<br/>
The game that's currently in progress on the server.
### masterMode
String<br/>
The current master mode of the server.
### info
[STServerInfo](../struct/serverinfo.md)<br/>
The server info.
### country
[STCountry](../struct/country.md)<br/>
Where the server is based.
### version
Number<br/>
The version the server is running.
### totalGames
?Number<br/>
How many games have been played on the server.
### rank
?Number<br/>
The server's rank.

## Methods
Meets specification in [STAsync](async.md).
