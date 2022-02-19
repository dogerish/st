const https = require("https");
const { HTTPError, NonJSONReturnError } = require("./errors.js");

const HOST = "https://sauertracker.net";
// make a request to API v1
// use as a format string function, all fillers will be encoded with encodeURIComponent
// Example: request`path/${name}` would end up requesting to `path/${encodeURIComponent(name)}`.
function /*Promise<Object>*/ request(parts, ...fillers)
{
	// get the encoded path
	let url =
		  `${HOST}/api/`
		+ parts.reduce((acc, val, i) => acc + encodeURIComponent(fillers[i - 1]) + val);
	return new Promise((resolve, reject) =>
	{
		let req = https.request(url, res =>
		{
			let data = "";
			res.on("data", chunk => data += chunk);
			res.on("end", () =>
			{
				try { data = JSON.parse(data); }
				catch (e)
				{
					if (res.statusCode != 200)
						return reject(new HTTPError(
							res.statusCode,
							res.statusMessage
						));
					else if (e instanceof SyntaxError)
						return reject(new NonJSONReturnError(
							res.req.host + res.req.path
						));
					else
						return reject(e);
				}
				if (res.statusCode == 200) resolve(data);
				else
					reject(new HTTPError(
						res.statusCode,
						res.statusMessage,
						data.error
					));
			});
		});
		req.end();
	});
};
// make a request to API v2
const requestv2 = /*Promise<Object>*/ ([a, ...rest], ...fillers) =>
	request(["v2/" + a, ...rest], ...fillers);

// whether or not the error is an HTTPError with code 404
const is404 = /*Boolean*/ (/*Error*/ error) => error instanceof HTTPError && error.code == 404;

module.exports =
{
	HOST,
	request,
	requestv2,
	is404
};
