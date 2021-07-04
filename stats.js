class STStats
{
	/*
	Number frags;
	Number flags;
	Number deaths;
	Number tks;
	Number kpd;
	Number acc;
	*/
	constructor(/*Object*/ from)
	{
		for (let key of ["frags", "flags", "deaths", "tks", "kpd", "acc"])
			this[key] = from[key];
	}
}

module.exports = STStats;
