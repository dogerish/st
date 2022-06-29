export class STResults
{
	/** The minimum game ID. */
	first: number;
	/** The maximum game ID. */
	last: number;
	/** The total number of matches. */
	count: number;
	/** An array of the actual search results. */
	results: any[];

	/**
	 * @param stats - The object to get the properties first, last, and count 
	 * from.
	 * @param results - The search results
	 */
	constructor(
		stats: { first: number, last: number, count: number },
		results: any[]
	)
	{
		this.first   = stats.first;
		this.last    = stats.last;
		this.count   = stats.count;
		this.results = results;
	}
}
