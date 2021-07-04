const STStats = require("./stats.js");

class STPlayerStats
{
	/*
	STStats insta;
	STStats effic;
	STStats total;
	*/
	constructor(
		/*STStatsResolvable*/ insta,
		/*STStatsResolvable*/ effic,
		/*STStatsResolvable*/ total
	)
	{
		this.insta = new STStats(insta);
		this.effic = new STStats(effic);
		this.total = new STStats(total);
	}
}

module.exports = STPlayerStats;
