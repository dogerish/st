const http = require("http");
const { HTTPError } = require("./errors.js");

const HOST = "http://sauertracker.net";
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
		let req = http.request(url, res =>
		{
			let data = "";
			res.on("data", chunk => data += chunk);
			res.on("end", () =>
			{
				data = JSON.parse(data);
				if (res.statusCode == 200) resolve(data);
				else reject(new HTTPError(
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
const /*Promise<Object>*/ requestv2 =
	([a, ...rest], ...fillers) => request(["v2/" + a, ...rest], ...fillers);

module.exports =
{
	HOST,
	request,
	requestv2
};
