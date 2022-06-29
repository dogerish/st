const https = require("https");
import { HTTPError, NonJSONReturnError } from "./errors";

/** The host to make http requests to. */
export const HOST = "https://sauertracker.net";

/**
 * Make a request to API v1. Use as a format string function, all fillers will 
 * be encoded with encodeURIComponent. For example, "request`path/${name}`" 
 * would end up requesting to "`path/${encodeURIComponent(name)}`".
 *
 * @returns The parsed JSON data recieved from the API
 */
export function request(
	parts: TemplateStringsArray | string[],
	...fillers: any[]
): Promise<any>
{
	// get the encoded path
	let url = `${HOST}/api/` + parts.reduce(
		(a: string, v: string, i: number): string =>
			a + encodeURIComponent(fillers[i - 1]) + v
	);
	return new Promise((resolve, reject) =>
	{
		let req = https.request(url, (res: any): any =>
		{
			let data = "";
			res.on("data", (chunk: any) => data += chunk);
			res.on("end", () =>
			{
				let jsonData: any;
				try { jsonData = JSON.parse(data); }
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
				if (res.statusCode == 200) resolve(jsonData);
				else
					reject(new HTTPError(
						res.statusCode,
						res.statusMessage,
						jsonData.error
					));
			});
		});
		req.end();
	});
};

/**
 * Make a request to API v2. Also used as a format string function, and calls 
 * the {@link request} function under the hood.
 */
export function requestv2(
	parts: TemplateStringsArray | string[],
	...fillers: any[]
): Promise<any>
{ return request(["v2/" + parts[0], ...parts.slice(1)], ...fillers); }

/**
 * Whether or not an error is an {@link utils/errors!HTTPError} with code 404
 *
 * @param error - The error to check
 * 
 * @returns True if the error is a 404
 */
export function is404(error: unknown): boolean
{ return error instanceof HTTPError && (error as HTTPError).code == 404; }
