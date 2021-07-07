# NonJSONReturnError extends [SelfAwareError](selfawareerror.md)
Error for when an API request does not return [valid] JSON.

## Constructor
```js
constructor(/*String*/ url)
```
### Arguments
1. `/*String*/ url`
	* The URL, excluding the `http://`, that was requested.
