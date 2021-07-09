# STAsync
Base class for classes that can asynchronously fetch their data from the API.

## Constructor
```js
constructor(/*Array<String>*/ neededProps, /*Object*/ from)
```
### Arguments
1. `/*Array<String>*/ neededProps`
	* An array of strings that specify all the needed properties for this class to be [`this._full`](#_full).
	* Properties can be marked as optional by putting a question mark (`?`) at the beginning of the string. This will make [`this.copyProps()`](#copyprops) copy the property if it is provided, but will also keep the lack of its presence from influencing the value of [`this._full`](#_full).
2. `/*Object*/ from`
	* An object that will be passed to [`this.copyProps()`](#copyprops).

## Properties
### \_full
Boolean<br/>
True after [`this.copyProps()`](#copyprops) is called and finds all non-optional [`this._neededProps`](#_neededprops) to be present in this.
### \_neededProps
Array<[STProperty](../struct/property.md)><br/>
Array containing all the properties needed for [`this._full`](#_full) to be true.

## Methods
### copyProps
```js
/*STAsync*/ copyProps(/*Object*/ from)
```
Copies the properties of `from` to `this`.
#### Arguments
1. `/*Object*/ from`
	* The object from which to copy properties from. Only the properties that are in both [`this._neededProps`](#_neededprops) and in `from` are copied.
#### Return: [STAsync](async.md)
Returns `this`.

### fetch
```js
async /*STAsync*/ fetch()
```
Asynchronously fetches the data for this object and then updates [`this._full`](#_full). Must be overridden by child classes or else it will simply throw a [NoOverrideError](../utils/errors/nooverrideerror.md).
#### Return: [STAsync](async.md)
Returns `this`.
#### Errors
Should throw an instance of [NotFoundError](../utils/errors/notfounderror.md) if whatever this is representing isn't found.

### set
```js
/*STAsync*/ set(/*Object*/ from)
```
Sets properties of `this` according to `from`, assuming `from` was the return of an API call. Must be overridden by child classes or else it will simply throw a [NoOverrideError](../utils/errors/nooverrideerror.md).
#### Arguments
1. `/*Object*/ from`
	* The object containing the data to take. Updates [`this._full`](#_full) afterward.
#### Return: [STAsync](async.md)
Returns `this`.
