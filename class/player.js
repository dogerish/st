const STAsync       = require("./async.js");
const { request, requestv2, is404 } = require("../utils/requests.js");
const { PlayerNotFoundError       } = require("../utils/errors.js");
const STCountry     = require("../struct/country.js");
const STClan        = require("./clan.js");
const STDuels       = require("../struct/duels.js");
const STPlayerStats = require("../struct/playerstats.js");
const STGame        = require("./game.js");
const STActivity    = require("../struct/activity.js");

class STPlayer extends STAsync
{
	// find up to 200 players matching a given query
	static async find(/*String*/ name = "", /*String*/ country = "")
	{
		return (await requestv2`players/find?name=${name}&country=${country}`).map(
			player => new STPlayer(player.name).set(player)
		);
	}

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
	async /*STPlayer*/ fetch()
	{
		try { return this.set(await requestv2`player/${this.name}`); }
		catch (e) { throw is404(e) ? new PlayerNotFoundError(this.name) : e; }
	}

	// sets properties from an object recieved from the api, returns this
	/*STPlayer*/ set(/*Object*/ from)
	{
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

	// fetches activity data for the player
	async /*Array<STActivity>*/ fetchActivity()
	{
		return (await request`player/activity/${this.name}`).activity.map(
			x => new STActivity(new Date(x.date), x.count)
		);
	}
}

module.exports = STPlayer;
