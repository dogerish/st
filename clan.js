const { request }  = require("./requests.js");
const STAsync      = require("./base.js");
const STGame       = require("./game.js");
const STClanMember = require("./clanmember.js");
const { HTTPError, ClanNotFoundError } = require("./errors.js");

class STClan extends STAsync
{
	/*
	String              tag;
	String              title;
	String              website;
	STGames             games;
	Array<STClanMember> members;

	Number              rank;
	Number              rate;
	Number              points;

	Number              wins;
	Number              losses;
	Number              ties;
	*/
	constructor(/*String*/ tag)
	{
		super(
			[
				"tag", "title", "website", "games", "members",
				"rank", "rate", "points",
				"wins", "losses", "ties"
			],
			{ tag }
		);
	}

	// fetch and return this
	async /*STClan*/ fetch()
	{
		try { return this.set(await request`clan/${this.tag}`); }
		catch (e)
		{
			if (!(e instanceof HTTPError)) throw e;
			if (e.code == 404) throw new ClanNotFoundError(this.tag);
		}
	}

	// set based on return from API, return this
	/*STClan*/ set(/*Object*/ from)
	{
		if (from.info)
		{
			this.title   = from.info.title;
			this.website = from.info.website;
		}
		if (from.games) this.games = from.games.map(game => new STGame(game.id).set(game));
		if (from.members)
			this.members = from.members.map(m => new STClanMember(m.name, m.lastseen));
		return this.copyProps(from.clan);
	}
}

module.exports = STClan;
