import { percent } from "../utils/general";

export class STWinStats
{

	constructor(
		public count:  number,
		public wins:   number,
		public losses: number,
		public ties:   number
	) {}

	winRate():  number { return percent(this.wins,   this.count); }
	lossRate(): number { return percent(this.losses, this.count); }
	tieRate():  number { return percent(this.ties,   this.count); }
}
