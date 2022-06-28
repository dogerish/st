export class SelfAwareError extends Error
{
	name: string;

	constructor(...args: any[])
	{
		super(...args);
		this.name = this.constructor.name;
	}
}

export class NonJSONReturnError extends SelfAwareError
{
	constructor(url: string)
	{ super(`"${url}" returned non-JSON data.`); }
}

export class HTTPError extends SelfAwareError
{
	code: number;
	defMessage: string;

	constructor(code: number, message: string, apimessage?: string)
	{
		super(`${code}: ${apimessage || message}`);
		this.code       = code;
		this.defMessage = message;
	}
}

export class NotFoundError extends SelfAwareError
{
	constructor(type: any, what: any)
	{ super(`${type} "${what}" not found.`); }
}

export class ClanNotFoundError extends NotFoundError
{
	constructor(clantag: string)
	{ super("Clan tag", clantag); }
}

export class GameNotFoundError extends NotFoundError
{
	constructor(id: number)
	{ super("Game ID", id); }
}

export class PlayerNotFoundError extends NotFoundError
{
	constructor(name: string)
	{ super("Player", name); }
}

export class ServerNotFoundError extends NotFoundError
{
	constructor(host: string, port: number)
	{ super("Server", `${host}:${port}`); }
}
