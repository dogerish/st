const { percent } = require("./utils.js");

class STDuels
{
	/*
	Number count;
	Number wins;
	Number losses;
	Number ties;
	*/
	constructor(/*Number*/ count, /*Number*/ wins, /*Number*/ losses, /*Number*/ ties)
	{
		this.count  = count;
		this.wins   = wins;
		this.losses = losses;
		this.ties   = ties;
	}

	/*Number*/  winRate() { return percent(this.wins,   this.count); }
	/*Number*/ lossRate() { return percent(this.losses, this.count); }
	/*Number*/  tieRate() { return percent(this.ties,   this.count); }
}

module.exports = STDuels;
