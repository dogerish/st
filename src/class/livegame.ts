import { getTeamsAndPlayers } from "../utils/general";
import { STTeam             } from "../interface/team";
import { STGamePlayer       } from "./gameplayer";

export class STLiveGame
{
	map: string;
	mode: string;
	type: string;
	timeLeft: number;
	timeLeftString: string;
	teams: STTeam[];
	players: STGamePlayer[];

	constructor(obj: {
		mapName: string,
		gameMode: string,
		gameType: string,
		timeLeft: number,
		timeLeftString: string,
		teams: any,
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
