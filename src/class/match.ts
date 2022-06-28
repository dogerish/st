import { request } from "../utils/requests";

export class STMatch
{
	players: string[];
	good?:   string[];
	evil?:   string[];

	constructor(...players: string[])
	{ this.players = players; }

	/**
	 * Splits the players into teams
	 *
	 * @returns This object
	 */
	async teamsplit(): Promise<STMatch>
	{
		let r = await request`players/teams?names=${this.players.join(' ')}`;
		this.good = r.good;
		this.evil = r.evil;
		return this;
	}
}
