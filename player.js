const STAsync       = require("./base.js");
const { requestv2 } = require("./requests.js");
const STCountry     = require("./country.js");
debugger;
const STClan        = require("./clan.js");
const STDuels       = require("./duels.js");
const STPlayerStats = require("./playerstats.js");
const STGame        = require("./game.js");

class STPlayer extends STAsync
{
	/*
	String        name;
	STCountry     country;
	?STClan       clan;

	Number        rank;
	Number        elo;
	?Number       totalGames;
	STDuels       duels;
	STPlayerStats stats;

	Boolean       online;
	Array<STGame> latestGames;
	*/
	constructor(/*String*/ name)
	{
		super(
			[
				"name",       "country",     "?clan",
				"rank",       "elo",         "?totalGames", "duels", "stats",
				"online",     "latestGames"
			],
			{ name }
		);
	}

	// fetches properties of this, returns this
	async /*STPlayer*/ fetch() { return this.set(await requestv2`player/${this.name}`); }

	// sets properties from an object recieved from the api, returns this
	/*STPlayer*/ set(/*Object*/ from)
	{
		debugger;
		if (from.country)   from.country = new STCountry(from.country, from.countryName);
		if (from.clan)      from.clan    = new STClan(from.clanTag, from.clan);
		if (from.duelCount) from.duels   = new STDuels(
			from.duelCount,
			from.duelWins,
			from.duelLosses,
			from.duelTies
		);
		if (from.instaStats)
			from.stats = new STPlayerStats(from.instaStats, from.efficStats, from);
		if (from.latestGames) from.latestGames = from.latestGames.map(
			game => new STGame(game.id).set(game)
		);
		return this.copyProps(from);
	}
}
debugger;
module.exports = STPlayer;
