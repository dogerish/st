import { percent } from "../utils/general";

/** Statistics on count, wins, losses and ties. */
export class STWinStats
{

	/**
	 * @param count - Number of games
	 * @param wins - Number of wins
	 * @param losses - Number of losses
	 * @param ties - Number of ties
	 */
	constructor(
		public count:  number,
		public wins:   number,
		public losses: number,
		public ties:   number
	) {}

	/**
	 * @returns the percentage calculated by {@link utils/general!percent}, of 
	 * {@link STWinStats#wins | this.wins} out of {@link STWinStats#count | 
	 * this.count}
	 */
	winRate():  number { return percent(this.wins,   this.count); }
	/**
	 * @returns like {@link STWinStats.winRate}, but for losses
	 */
	lossRate(): number { return percent(this.losses, this.count); }
	/**
	 * @returns like {@link STWinStats.winRate}, but for ties
	 */
	tieRate():  number { return percent(this.ties,   this.count); }
}
