export class STResults
{
	first: number;
	last: number;
	count: number;
	results: any[];

	constructor(stats: any, results: any[])
	{
		this.first   = stats.first;
		this.last    = stats.last;
		this.count   = stats.count;
		this.results = results;
	}
}
