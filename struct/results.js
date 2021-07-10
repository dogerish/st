class STResults
{
	/*
	Array results;

	Number first;
	Number last;
	Number count;
	*/
	constructor(/*Object*/ stats, /*Array*/ results)
	{
		this.first   = stats.first;
		this.last    = stats.last;
		this.count   = stats.count;
		this.results = results;
	}
}

module.exports = STResults;
