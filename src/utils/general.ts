import { STGamePlayer } from "../class/gameplayer";
import { STTeam       } from "../interface/team";

/**
 * Gets percent of n out of t, rounded to the nearest whole number
 * 
 * @param n - number
 * @param t - total
 *
 * @return Whole number in the interval [0,100]
 */
export function percent(n: number, t: number): number
{ return Math.round(n / t * 100); }

/**
 * Get arrays of teams and players as objects
 *
 * @returns Teams and players as STTeam and STGamePlayer objects
 */
export function getTeamsAndPlayers(teams: any[], players: any[]):
	[STTeam[], STGamePlayer[]]
{
	let teamsMap: Map<string, STTeam> = new Map(teams.map(
			(obj: any): [string, STTeam] =>
				[obj.name, { name: obj.name, score: obj.score }]
	));
	return [
		Array.from(teams.values()),
		players.map((player: any): STGamePlayer => {
			if (player.constructor != String)
				player.team = teamsMap.get(player.team);
			return new STGamePlayer(player);
		})
	];
}
