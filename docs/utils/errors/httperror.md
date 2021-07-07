# HTTPError extends [SelfAwareError](selfawareerror.md)

## Constructor
```js
constructor(/*Number*/ code, /*String*/ message, /*String*/ apimessage)
```
### Arguments
1. `/*Number*/ code`
	* The HTTP status code.
2. `/*String*/ message`
	* The HTTP status message.
3. `/*String*/ apimessage`
	* The API message that came with the error. Optional.

## Properties
### code
Number<br/>
The HTTP status code.
### defMessage
String<br/>
The default status message this got.
