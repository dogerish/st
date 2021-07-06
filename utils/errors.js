// custom exceptions
class NoOverrideError extends Error
{
	constructor(/*Object*/ who, /*String*/ method)
	{
		super(`${who.constructor.name} class missing a ${method} override.`);
		this.name = "NoOverrideError";
	}
}

class HTTPError extends Error
{
	constructor(/*Number*/ code, /*String*/ message, /*String*/ apimessage)
	{
		super(`${code}: ${apimessage || message}`);
		this.defMessage = message;
		this.code       = code;
		this.name       = "HTTPError";
	}
}

class ClanNotFoundError extends Error
{
	constructor(/*String*/ clantag)
	{
		super(`Clan "${clantag}" not found.`);
		this.name    = "ClanNotFoundError";
	}
}

module.exports =
{
	NoOverrideError,
	HTTPError,
	ClanNotFoundError
};
