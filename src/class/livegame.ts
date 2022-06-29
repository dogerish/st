import { getTeamsAndPlayers } from "../utils/general";
import { STTeam             } from "../interface/team";
import { STGamePlayer       } from "./gameplayer";

/**
 * Structure representing a live game, or a game which was in progress at the 
 * time it was fetched.
 */
export class STLiveGame
{
	/** The name of the map. */
	map: string;
	/** The game mode. */
	mode: string;
	/** The type of game. See {@link class/game!STGame#type}. */
	type: string;
	/** How many total seconds are left in the game. */
	timeLeft: number;
	/**
	 * How much time is left in the game, expressed as a String. Ex: `4:20`.
	 */
	timeLeftString: string;
	/** An array of the teams playing. */
	teams: STTeam[];
	/** An array of the players, including spectators. */
	players: STGamePlayer[];

	/**
	 * @param obj - The object to take properties from, as supplied by the API
	 */
	constructor(obj: {
		mapName: string,
		gameMode: string,
		gameType: string,
		timeLeft: number,
		timeLeftString: string,
		teams: { name: string, score: number }[],
		players: any
	})
	{
		this.map  = obj.mapName;
		this.mode = obj.gameMode;
		this.type = obj.gameType;
		this.timeLeft = obj.timeLeft;
		this.timeLeftString = obj.timeLeftString;
		[this.teams, this.players] = getTeamsAndPlayers(
			obj.teams || [], 
			obj.players
		);
	}
}
