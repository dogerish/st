import { requestv2, is404   } from "../utils/requests";
import { getTeamsAndPlayers } from "../utils/general";
import { GameNotFoundError  } from "../utils/errors";
import { STAsync            } from "./async";
import { STResults          } from "./results";
import { STServer           } from "./server";
import { STCountry          } from "./country";
import { STTeam             } from "../interface/team";
import { STGamePlayer       } from "./gameplayer";

export class STGame extends STAsync
{
	static async find(host: string = "", port: number | string = ""): 
		Promise<STResults>
	{
		let r = await requestv2`games/find?host=${host}&port=${port}`;
		return new STResults(
			r.stats,
			r.results.map((g: any): STGame => new STGame(g.id).set(g))
		);
	}

	id:       number;
	date?:    Date;
	server?:  STServer;
	clients?: number;
	teams?:   STTeam[];
	players?: STGamePlayer[];
	meta?:    [string, number];
	mode?:    string;
	type?:    string;
	map?:     string;

	constructor(id: number)
	{
		super();
		this.id = id;
	}

	override async fetch(): Promise<STAsync>
	{
		try { this.set(await requestv2`game/${this.id}`); }
		catch (e) { throw is404(e) ? new GameNotFoundError(this.id) : e; }
		this.fetched = true;
		return this;
	}

	override set(data: any): STGame
	{
		if (data.time) this.date = new Date(data.time);
		if (data.host && data.port) {
			this.server = new STServer(data.host, data.port);
			if (data.info) {
				this.server.info = data.info;
				this.server.country = new STCountry(
					data.country, data.countryName
				);
				this.server.description = data.description;
				this.server.descriptionStyled = data.descriptionStyled;
			}
		}

		if (data.clients) this.clients = data.clients;
		if (data.teams != undefined && data.players != undefined)
			[this.teams, this.players] = getTeamsAndPlayers(
				data.teams, data.players
			);
		if (data.meta != undefined) this.meta = data.meta ?? [];

		if (data.gameMode) this.mode = data.gameMode;
		if (data.gameType = data.gameType || data.gameTypea)
			this.type = data.gameType;
		if (data.mapName) this.map = data.mapName;
		return this;
	}
}
