const STStats = require("./stats.js");
const STTeam  = require("./team.js");

class STGamePlayer
{
	/*
	String  name;
	Number  state;
	STStats stats;
	STTeam  team;
	*/
	constructor(/*Object*/ obj)
	{
		this.name  = obj.name;
		this.state = obj.state;
		this.stats = new STStats(obj);
		this.team  = obj.team;
	}
}

module.exports = STGamePlayer;
