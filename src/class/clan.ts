import { request, requestv2, is404 } from "../utils/requests";
import { ClanNotFoundError         } from "../utils/errors";
import { STAsync                   } from "./async";
import { STGame                    } from "./game";
import { STWinStats                } from "./winstats";
import { STClanMember              } from "../interface/clanmember";

/** Class for clan information. */
export class STClan extends STAsync
{
	/**
	 * Get list of all clans with some info sorted by rank
	 */
	static async list(): Promise<STClan[]>
	{
		return (await requestv2`clans`).clans.map((clan: any): STClan =>
			new STClan(clan.tag).set({
				info: { website: clan.website, title: clan.title },
				clan
			})
		);
	}

	/** The clan's tag. */
	tag: string;
	/** The title of the clan. */
	title?: string;
	/** A link to the clan's website. */
	website?: string;
	/** The last 10 games that this clan participated in. */
	games?: STGame[];
	/** The members of this clan. */
	members?: STClanMember[];
	/** The rank of this clan among other clans. */
	rank?: number;
	/** The win rate of this clan. `(wins + ties / 2) / totalGames` */
	rate?: number;
	/** How many points the clan has. `(wins + ties / 2)^2 / totalGames` */
	points?: number;
	/** The statistics on wins, losses, ties, and total games. */
	winstats?: STWinStats;

	constructor(tag: string)
	{
		super();
		this.tag = tag;
	}

	override async fetch(): Promise<STClan>
	{
		try { this.set(await request`clan/${this.tag}`); }
		catch (e)
		{ throw is404(e) ? new ClanNotFoundError(this.tag) : e; }
		this.fetched = true;
		return this;
	}

	override set(data: any): STClan
	{
		if (data.info)
		{
			this.title   = data.info.title;
			this.website = data.info.website;
		}
		if (data.games)
			this.games = data.games.map(
				(game: any): STGame => new STGame(game.id).set(game)
			);
		if (data.members)
			this.members = data.members.map(
				(m: any): STClanMember =>
				{ return { name: m.name, lastseen: new Date(m.lastseen) } }
			);
		if (data = data.clan)
		{
			this.rank = data.rank;
			this.rate = data.rate;
			this.points = data.points;
			this.winstats = new STWinStats(
				data.wins + data.losses + data.ties,
				data.wins, data.losses, data.ties
			);
			return this;
		}
		return this;
	}
}
