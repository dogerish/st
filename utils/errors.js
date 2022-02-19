class SelfAwareError extends Error
{
	constructor(...args)
	{
		super(...args);
		this.name = this.constructor.name;
	}
}

class NoOverrideError extends SelfAwareError
{
	constructor(/*Object*/ who, /*String*/ method)
	{ super(`${who.constructor.name} class missing a ${method} override.`); }
}

class NonJSONReturnError extends SelfAwareError
{
	constructor(/*String*/ url)
	{ super(`"${url}" returned non-JSON data.`); }
}

class HTTPError extends SelfAwareError
{
	constructor(/*Number*/ code, /*String*/ message, /*String*/ apimessage)
	{
		super(`${code}: ${apimessage || message}`);
		this.code       = code;
		this.defMessage = message;
	}
}

class NotFoundError extends SelfAwareError
{
	constructor(/*StringResolvable*/ type, /*StringResolvable*/ what)
	{ super(`${type} "${what}" not found.`); }
}
class ClanNotFoundError extends NotFoundError
{ constructor(/*String*/ clantag) { super("Clan tag", clantag); } }
class GameNotFoundError extends NotFoundError
{ constructor(/*Number*/ id) { super("Game ID", id); } }
class PlayerNotFoundError extends NotFoundError
{ constructor(/*String*/ name) { super("Player", name); } }
class ServerNotFoundError extends NotFoundError
{ constructor(/*String*/ host, /*Number*/ port) { super("Server", `${host}:${port}`); }}

module.exports =
{
	SelfAwareError,
	NoOverrideError,
	NonJSONReturnError,
	HTTPError,
	NotFoundError,
	ClanNotFoundError,
	GameNotFoundError,
	PlayerNotFoundError,
	ServerNotFoundError
};
