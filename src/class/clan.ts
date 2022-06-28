import { request, requestv2, is404 } from "../utils/requests";
import { ClanNotFoundError         } from "../utils/errors";
import { STAsync                   } from "./async";
import { STGame                    } from "./game";
import { STWinStats                } from "./winstats";
import { STClanMember              } from "../interface/clanmember";

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

	tag: string;
	title?: string;
	website?: string;
	games?: STGame[];
	members?: STClanMember[];
	rank?: number;
	rate?: number;
	points?: number;
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
