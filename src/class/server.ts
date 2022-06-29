import { request, requestv2  } from "../utils/requests";
import { ServerNotFoundError } from "../utils/errors";
import { STAsync             } from "./async";
import { STLiveGame          } from "./livegame";
import { STCountry           } from "./country";
import { STServerActivity    } from "./serveractivity";
import { STServerInfo        } from "../interface/serverinfo";

/** Class representing a server. */
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

	/** The host or IP of the server. */
	host: string;
	/** The port of the server. */
	port: number;
	/** The server's description. */
	description?: string;
	/** The description styled with html. */
	descriptionStyled?: string;
	/** The number of clients on the server. */
	clients?: number;
	/** The maximum number of clients the server supports. */
	maxClients?: number;
	/** Whether or not the server is full. */
	isFull?: boolean;
	/** Whether or not the server is a zombie server. */
	zombie?: boolean;
	/** The game that's currently in progress on the server. */
	game?: STLiveGame;
	/** The current master mode of the server. */
	masterMode?: string;
	/** The server info. */
	info?: STServerInfo;
	/** Where the server is based. */
	country?: STCountry;
	/** The version the server is running. */
	version?: number;
	/** How many games have been played on the server. */
	totalGames?: number;
	/** The server's rank. */
	rank?: number;

	/**
	 * @param host - The host or IP of the server.
	 * @param port - The port of the server.
	 */
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
