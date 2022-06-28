import { STStats } from "./stats";
import { STTeam  } from "../interface/team";

export class STGamePlayer
{
	name:  string;
	state: number;
	stats: STStats;
	team:  STTeam;

	constructor(obj: any)
	{
		this.name  = obj.name;
		this.state = obj.state;
		this.stats = obj as STStats;
		this.team  = obj.team as STTeam;
	}
}
