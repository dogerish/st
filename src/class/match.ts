import { request } from "../utils/requests";

/**
 * A structure representing a theoretical player match-up. Takes a list of 
 * players as input and then is able to split those players up into "semi 
 * balanced teams". Details can be found 
 * [here](https://github.com/AngrySnout/SauerTracker/wiki/API-v1#apiplayersteams). 
 */
export class STMatch
{
	/** The players this is splitting up into teams. */
	players: string[];
	/** An array of the players on team `good`. */
	good?:   string[];
	/** An array of the players on team `evil`. */
	evil?:   string[];

	/**
	 * @param players - The names of the players involved in this theoretical 
	 * match.
	 */
	constructor(...players: string[])
	{ this.players = players; }

	/**
	 * Asynchronously calls the API in order to split {@link STMatch.players | 
	 * this.players} up into the teams `good` and `evil`.
	 *
	 * @returns this object, which has the properties `good` and `evil` set 
	 * accordingly.
	 */
	async teamsplit(): Promise<STMatch>
	{
		let r = await request`players/teams?names=${this.players.join(' ')}`;
		this.good = r.good;
		this.evil = r.evil;
		return this;
	}
}
