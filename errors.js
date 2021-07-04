// custom exceptions
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
		this.code    = 404;
		this.name    = "ClanNotFoundError";
	}
}

module.exports =
{
	HTTPError,
	ClanNotFoundError
};
