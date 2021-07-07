// custom exceptions
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
	{ super(`"http://${url}" returned non-JSON data.`); }
}

class HTTPError extends SelfAwareError
{
	constructor(/*Number*/ code, /*String*/ message, /*String*/ apimessage)
	{
		super(`${code}: ${apimessage || message}`);
		this.defMessage = message;
		this.code       = code;
	}
}

class ClanNotFoundError extends SelfAwareError
{
	constructor(/*String*/ clantag)
	{ super(`Clan "${clantag}" not found.`); }
}

module.exports =
{
	SelfAwareError,
	NoOverrideError,
	NonJSONReturnError,
	HTTPError,
	ClanNotFoundError
};
