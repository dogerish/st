import { request, requestv2, is404 } from "../utils/requests";
import { PlayerNotFoundError       } from "../utils/errors";
import { STAsync                   } from "./async";
import { STCountry                 } from "./country";
import { STWinStats                } from "./winstats";
import { STGame                    } from "./game";
import { STClan                    } from "./clan";
import { STPlayerStats             } from "../interface/playerstats";
import { STStats                   } from "./stats";
import { STActivity                } from "../interface/activity";

/** Class representing a player. */
export class STPlayer extends STAsync
{
	/**
	 * Find up to 200 players matching a given query
	 *
	 * @param name - The name to match, or an empty string to not match any 
	 * name.
	 * @param country - A country abbreviation, such as CA for Canada.
	 *
	 * @returns an array of up to 200 players that match the query.
	 */
	static async find(name: string = "", country: string = ""): Promise<STPlayer[]>
	{
		let r = await requestv2`players/find?name=${name}&country=${country}`;
		return r.map(
			(player: any): STPlayer => new STPlayer(player.name).set(player)
		);
	}

	/** The name of the player. */
	name:         string;
	/** The country the player is from. */
	country?:     STCountry;
	/** The clan the player is in, if the player is in a clan. */
	clan?:        STClan;
	/** The player's rank. */
	rank?:        number;
	/**
	 * The player's elo. In the [SauerTracker code on 
	 * GitHub](https://github.com/AngrySnout/SauerTracker), I found what I 
	 * assume to be the [elo calculating 
	 * function](https://github.com/AngrySnout/SauerTracker/blob/e20132fb6cacbf6d680f068d7e92d83382b3c32f/src/tracker/game.js#L104).
	 * What I interpret from this:
	 * 1. Every player starts with a base elo (1200 by default), and this elo 
	 *    is then mutated after duels.
	 * 2. Only duels where both players have at least one frag impact elo.
	 * 3. The elo is changed depending on the ratio of frags and elo between 
	 *    the player and opponent, as well as the base elo.
	 * 4. Assuming the game passed the above checks and the `frags` property of 
	 *    `self` and `opp` is for this particular game, the new elo of `self` 
	 *    after dueling `opp` is increased or decreased by the rounded result 
	 *    of
	 * ```js
	 * 10 * (log(self.frags / opp.frags) + log(opp.elo / self.elo)) * (self.elo / baseElo)
	 * ```
	 */
	elo?:         number;
	/** The total number of games this player has played. */
	totalGames?:  number;
	/**
	 * Information about the player's duelling history. Wins, losses, ties, and 
	 * total number of duels played.
	 */
	duels?:       STWinStats;
	/** The player's statistics. */
	stats?:       STPlayerStats;
	/** True if the player is on a server. */
	online?:      boolean;
	/** An array of the last ten games played. */
	latestGames?: STGame[];

	/**
	 * @param name - The name of the player, clan tag included if appropriate.
	 */
	constructor(name: string)
	{
		super();
		this.name = name;
	}

	override async fetch(): Promise<STPlayer>
	{
		try { this.set(await requestv2`player/${this.name}`); }
		catch (e) { throw is404(e) ? new PlayerNotFoundError(this.name) : e; }
		this.fetched = true;
		return this;
	}

	override set(data: any): STPlayer
	{
		if (data.country !== undefined)
			this.country = new STCountry(data.country, data.countryName);
		if (data.clan) {
			this.clan = new STClan(data.clanTag);
			this.clan.title = data.clan;
		}
		this.rank = data.rank;
		this.elo = data.elo;
		this.totalGames = data.totalGames;
		if (data.duelCount !== undefined) {
			this.duels = new STWinStats(
				data.duelCount,
				data.duelWins,
				data.duelLosses,
				data.duelTies
			);
		}
		if (data.instaStats) {
			this.stats = {
				insta: new STStats(data.instaStats),
				effic: new STStats(data.efficStats),
				total: new STStats(data)
			};
		}
		this.online = data.online;
		if (data.latestGames) {
			this.latestGames = data.latestGames.map(
				(game: any): STGame => new STGame(game.id).set(game)
			);
		}
		return this;
	}

	/**
	 * Fetches activity data for the player
	 */
	async fetchActivity(): Promise<STActivity[]>
	{
		return (await request`player/activity/${this.name}`).activity.map(
			(x: any): STActivity => {
				return { date: new Date(x.date), count: x.count };
			}
		);
	}
}
