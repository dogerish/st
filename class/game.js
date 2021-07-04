const { requestv2          } = require("../utils/requests.js");
const { getTeamsAndPlayers } = require("../utils/general.js");
const STAsync   = require("./async.js");
const STServer  = require("./server.js");
const STCountry = require("../struct/country.js");

class STGame extends STAsync
{
	/*
	Number                id;
	Date                  date;
	STServer              server;

	Number                clients;
	Array<STTeam>         teams;
	Array<STGamePlayer>   players;
	Array<String, Number> meta;

	String                mode;
	String                type;
	String                typea;
	String                map;
	*/
	constructor(/*Number*/ id)
	{
		super(
			[
				"id",      "date",  "server",
				"clients", "teams", "players", "meta",
				"mode",    "type",  "?typea",  "map"
			],
			{ id }
		);
	}

	// fetch and return this
	async /*STGame*/ fetch() { return this.set(await requestv2`game/${this.id}`); }

	/*STGame*/ set(/*Object*/ from)
	{
		if (from.time) this.date = new Date(from.time);
		if (from.host && from.port) this.server = new STServer(from.host, from.port);
		if (from.info)
		{
			this.server.info        = from.info;
			this.server.country     = new STCountry(from.country, from.countryName);
			this.server.description = from.description;
			this.server.descriptionStyled = from.descriptionStyled;
		}

		if (from.clients) this.clients = from.clients;
		if (from.teams != undefined && from.players != undefined)
			[this.teams, this.players] = getTeamsAndPlayers(from.teams, from.players);
		if (from.meta) this.meta = from.meta;

		if (from.gameMode)  this.mode  = from.gameMode;
		if (from.gameType)  this.type  = from.gameType;
		if (from.gameTypea) this.typea = from.gameTypea;
		if (from.mapName)   this.map   = from.mapName;
		return this.copyProps({});
	}
}

module.exports = STGame;
