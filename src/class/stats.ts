export class STStats
{
	frags:  number;
	flags:  number;
	deaths: number;
	tks:    number;
	kpd:    number;
	acc:    number;

	constructor(source: any)
	{
		this.frags  = source.frags;
		this.flags  = source.flags;
		this.deaths = source.deaths;
		this.tks    = source.tks;
		this.kpd    = source.kpd;
		this.acc    = source.acc;
	}
}
