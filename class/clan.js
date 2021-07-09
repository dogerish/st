const { request, is404 }  = require("../utils/requests.js");
const { ClanNotFoundError } = require("../utils/errors.js");
const STAsync      = require("./async.js");
const STGame       = require("./game.js");
const STClanMember = require("../struct/clanmember.js");

class STClan extends STAsync
{
	/*
	String              tag;
	String              title;
	String              website;
	Array<STGame>       games;
	Array<STClanMember> members;

	Number              rank;
	Number              rate;
	Number              points;

	Number              wins;
	Number              losses;
	Number              ties;
	Number              totalGames;
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
		catch (e) { throw is404(e) ? new ClanNotFoundError(this.tag) : e; }
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
		this.copyProps(from.clan);
		this.total = this.wins + this.ties + this.losses;
		return this;
	}
}

module.exports = STClan;
