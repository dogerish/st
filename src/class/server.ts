import { request, requestv2  } from "../utils/requests";
import { ServerNotFoundError } from "../utils/errors";
import { STAsync             } from "./async";
import { STLiveGame          } from "./livegame";
import { STCountry           } from "./country";
import { STServerActivity    } from "./serveractivity";
import { STServerInfo        } from "../interface/serverinfo";

export class STServer extends STAsync
{
	/**
	 * List all servers online
	 */
	static async list(): Promise<STServer[]>
	{
		return (await requestv2`servers`).map(
			(s: any): STServer => new STServer(s.host, s.port).set(s)
		);
	}

	host: string;
	port: number;
	description?: string;
	descriptionStyled?: string;
	clients?: number;
	maxClients?: number;
	isFull?: boolean;
	zombie?: boolean;
	game?: STLiveGame;
	masterMode?: string;
	info?: STServerInfo;
	country?: STCountry;
	version?: number;
	totalGames?: number;
	rank?: number;

	constructor(host: string, port: number)
	{
		super();
		this.host = host;
		this.port = port;
	}

	override async fetch(): Promise<STServer>
	{
		let serverExists: boolean = (await requestv2`servers`).some(
			(s: any): boolean => s.host == this.host && s.port == this.port
		);
		if (!serverExists) throw new ServerNotFoundError(this.host, this.port);
		this.set(await requestv2`server/${this.host}/${this.port}`);
		this.fetched = true;
		return this;
	}

	override set(data: any): STServer
	{
		this.description = data.description;
		this.descriptionStyled = data.descriptionStyled;
		this.clients = data.clients;
		this.maxClients = data.maxClients;
		this.isFull = data.isFull;
		this.zombie = data.zombie;
		this.game = new STLiveGame(data);
		this.masterMode = data.masterMode;
		if (data.info) this.info = data.info;
		if (data.country !== undefined)
			this.country = new STCountry(data.country, data.countryName);
		this.version = data.version;
		if (data.totalGames) this.totalGames = Number(data.totalGames);
		if (data.rank) this.rank = Number(data.rank);
		return this;
	}

	/**
	 * Fetch activity for this server
	 */
	async fetchActivity(): Promise<STServerActivity>
	{
		let a = await request`server/activity/${this.host}/${this.port}`;
		return new STServerActivity(a.day, a.month);
	}
}
