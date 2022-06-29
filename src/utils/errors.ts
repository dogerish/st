/**
 * Error class that automatically sets `this.name` to `this.constructor.name`.
 */
export class SelfAwareError extends Error
{
	/** Name of the constructor */
	name: string;

	/**
	 * @param args - Passed to the Error constructor
	 */
	constructor(...args: any[])
	{
		super(...args);
		this.name = this.constructor.name;
	}
}

/** Error for when an API request does not return [valid] JSON */
export class NonJSONReturnError extends SelfAwareError
{
	/**
	 * @param url - The URL that was requested.
	 */
	constructor(url: string)
	{ super(`"${url}" returned non-JSON data.`); }
}

export class HTTPError extends SelfAwareError
{
	/** HTTP status code */
	code: number;
	/** The default status message this got */
	defMessage: string;

	/**
	 * @param code - Status code
	 * @param message - Status message
	 * @param apimessage - The API message that came with the error
	 */
	constructor(code: number, message: string, apimessage?: string)
	{
		super(`${code}: ${apimessage || message}`);
		this.code       = code;
		this.defMessage = message;
	}
}

/** Error for when something isn't found. */
export class NotFoundError extends SelfAwareError
{
	/**
	 * @param type - The name of the type of thing that wasn't found.
	 * @param what - The thing that wasn't found.
	 */
	constructor(type: any, what: any)
	{ super(`${type} "${what}" not found.`); }
}

/** Error for when SauerTracker fails to find a clan. */
export class ClanNotFoundError extends NotFoundError
{
	/**
	 * @param clantag - The tag of the clan that wasn't found.
	 */
	constructor(clantag: string)
	{ super("Clan tag", clantag); }
}

/** Error for when SauerTracker fails to find a game. */
export class GameNotFoundError extends NotFoundError
{
	/**
	 * @param id - The id of the game that wasn't found.
	 */
	constructor(id: number)
	{ super("Game ID", id); }
}

/** Error for when a player isn't found */
export class PlayerNotFoundError extends NotFoundError
{
	/**
	 * @param name - the name of the player that wasn't found
	 */
	constructor(name: string)
	{ super("Player", name); }
}

/* Error for when SauerTracker fails to find a server. */
export class ServerNotFoundError extends NotFoundError
{
	/**
	 * @param host - The host of the server that wasn't found.
	 * @param port - The port of the server that wasn't found.
	 */
	constructor(host: string, port: number)
	{ super("Server", `${host}:${port}`); }
}
