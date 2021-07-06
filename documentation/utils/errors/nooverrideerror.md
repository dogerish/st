# NoOverrideError extends Error
Error for when a method which needs to be overridden to be used is not overridden.

## Constructor
```js
constructor(/*Object*/ who, /*String*/ method)
```
### Arguments
1. `/*Object*/ who`
	* The object that is missing the override.
2. `/*String*/ method`
	* The method that needs to be overridden.
