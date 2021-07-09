const { requestv2           } = require("../utils/requests.js");
const { ServerNotFoundError } = require("../utils/errors.js");
const STAsync       = require("./async.js");
const STLiveGame    = require("../struct/livegame.js");
const STServerInfo  = require("../struct/serverinfo.js");
const STCountry     = require("../struct/country.js");

class STServer extends STAsync
{
	// list all servers online
	static async /*Array<STServer>*/ list()
	{ return (await requestv2`servers`).map(s => new STServer(s.host, s.port).set(s)); }

	/*
	String       host;
	Number       port;
	String       description;
	String       descriptionStyled;

	Number       clients;
	Number       maxClients;
	Boolean      isFull;
	Boolean      zombie;
	STLiveGame   game;
	String       masterMode;

	STServerInfo info;
	STCountry    country;
	Number       version;
	?Number      totalGames;
	?Number      rank;
	*/
	constructor(/*String*/ host, /*Number*/ port)
	{
		super(
			[
				"host",    "port",       "description", "descriptionStyled",
				"clients", "maxClients", "isFull",      "zombie",            "game",
				"info",    "country",    "version",     "?totalGames",       "?rank"
			],
			{ host, port }
		);
	}

	// fetch and return this
	async /*STServer*/ fetch()
	{
		if ((await requestv2`servers`).some(
			({ host, port }) => host == this.host && port == this.port
		))
			return this.set(await requestv2`server/${this.host}/${this.port}`);
		throw new ServerNotFoundError(this.host, this.port);
	}

	// set props based on reutrn from API call, returns this
	/*STServer*/ set(/*Object*/ from)
	{
		this.game = new STLiveGame(from);
		if (from.info) from.info = new STServerInfo(from.info);
		if (from.country) from.country = new STCountry(from.country, from.countryName);
		for (let key of ["totalGames", "rank"])
			if (from[key]) from[key] = Number(from[key]);
		return this.copyProps(from);
	}
}

module.exports = STServer;
