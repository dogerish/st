const { request } = require("../utils/requests.js");

class STMatch
{
	/*
	Array<String> players;
	Array<String> good;
	Array<String> evil;
	*/

	constructor(/*String...*/ ...players)
	{ this.players = players; }

	// split into teams
	async /*STMatch*/ teamsplit()
	{
		let r = await request`players/teams?names=${this.players.join(' ')}`;
		this.good = r.good;
		this.evil = r.evil;
		return this;
	}
}

module.exports = STMatch;
