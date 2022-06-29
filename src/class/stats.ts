/** Class for holding player statistics. */
export class STStats
{
	/** Number of kills */
	frags:  number;
	/** Number of flags scored */
	flags:  number;
	/** Number of deaths */
	deaths: number;
	/** Number of Team-kills */
	tks:    number;
	/** Kills per deaths (K/D) */
	kpd:    number;
	/** Accuracy */
	acc:    number;

	/**
	 * @param source - The object to get properties from.
	 */
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
