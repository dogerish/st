const { requestv2 } = require("./requests.js");
const STAsync       = require("./base.js");
const STLiveGame    = require("./livegame.js");
const STServerInfo  = require("./serverinfo.js");
const STCountry     = require("./country.js");

class STServer extends STAsync
{
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
	async /*STServer*/ fetch() { this.set(await requestv2`server/${this.host}/${this.port}`); }

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
