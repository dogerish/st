# SelfAwareError extends Error
Error class that automatically sets `this.name` to `this.constructor.name`.

## Constructor
```js
constructor(...args)
```
### Arguments
All arguments are passed to the Error constructor.
