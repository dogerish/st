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

export class STPlayer extends STAsync
{
	/**
	 * Find up to 200 players matching a given query
	 */
	static async find(name: string = "", country: string = ""): Promise<STPlayer[]>
	{
		let r = await requestv2`players/find?name=${name}&country=${country}`;
		return r.map(
			(player: any): STPlayer => new STPlayer(player.name).set(player)
		);
	}

	name:         string;
	country?:     STCountry;
	clan?:        STClan;
	rank?:        number;
	elo?:         number;
	totalGames?:  number;
	duels?:       STWinStats;
	stats?:       STPlayerStats;
	online?:      boolean;
	latestGames?: STGame[];

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
