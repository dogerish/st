# Requests
* [HOST](#host)
* [request\`\`](#request)
* [requestv2\`\`](#requestv2)

## HOST
```js
const HOST = "http://sauertracker.net";
```
The host to make http requests to.

## request
Make a request to `${HOST}/api/${path}` the `path` is retrieved by substituting each substitution of a format string with the return of `encodeURIComponent()` on it.
### Arguments
This should be used as a string formatter:
```js
request`player/${name}`.then(console.log);
```
In the above example, `name` will be passed through `encodeURIComponent()` before the request is made.
### Return: Promise<Object>
Returns a promise for an Object of the JSON data that the API supposedly returns.
### Errors
* Rejects with an [HTTPError](errors/httperror.md) if the response status code is not 200.
* Rejects with a [NonJSONReturnError](errors/nonjsonreturnerror.md) if it fails to parse the data.

## requestv2
Make a request to `${HOST}/api/v2/${path}`. Same path retrieval as [request](#request).
### Arguments
Use as a string formatter.
### Return: Promise<Object>
### Errors
Same as [request](#request).

## is404
```js
/*Boolean*/ (/*Error*/ error) => error instanceof HTTPError && error.code == 404;
```
### Arguments
1. `/*Error*/ error`
	* The error to check.
### Return: Boolean
Whether or not the error is an [HTTPError](errors/httperror.md) with code 404.
