import { STStats } from "./stats";
import { STTeam  } from "../interface/team";

/** A player of a game. */
export class STGamePlayer
{
	/** The name of the player. */
	name:  string;
	/**
	 * The state of the player.
	 * | State | Meaning   |
	 * |:-----:| --------- |
	 * | 0     | Alive     |
	 * | 1     | Dead      |
	 * | 2     | Spawning  |
	 * | 3     | Lagged    |
	 * | 4     | Editing   |
	 * | 5     | Spectator |
	 */
	state: number;
	/** The player's stats. */
	stats: STStats;
	/** The team the player is on. */
	team:  STTeam;

	/**
	 * @param obj - The API-given object that this will take from, which should 
	 * include attributes of STStats and name (string), state (number), and 
	 * team (attributes of STStats) attributes.
	 */
	constructor(obj: any)
	{
		this.name  = obj.name;
		this.state = obj.state;
		this.stats = obj as STStats;
		this.team  = obj.team as STTeam;
	}
}
