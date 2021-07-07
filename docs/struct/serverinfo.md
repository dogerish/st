# STServerInfo
Structure holding information about a server.

## Constructor
```js
constructor(/*Object*/ from)
```
### Arguments
1. `/*Object*/ from`
	* The object to get properties from. Direct copy.

## Properties
### website
String<br/>
A link to the server's website, or an empty string.
### demourl
String<br/>
Might be a URL to the server's demos, or an empty string.
### banned
String<br/>
Empty string or null if the server is not banned from tracking, and otherwise a string describing the reason for the ban.
