const { getTeamsAndPlayers } = require("../utils/general.js");

class STLiveGame
{
	/*
	String              map;
	String              mode;
	String              type;

	Number              timeLeft;
	String              timeLeftString;

	Array<STTeam>       teams;
	Array<STGamePlayer> players;
	*/

	/* Input object:
	{
		gameMode,
		mapName,
		timeLeft,
		timeLeftString,
		players,
		teams,
		gameType
	} */
	constructor(/*Object*/ obj)
	{
		this.map  = obj.mapName;
		this.mode = obj.gameMode;
		this.type = obj.gameType;

		this.timeLeft       = obj.timeLeft;
		this.timeLeftString = obj.timeLeftString;

		[this.teams, this.players] = getTeamsAndPlayers(obj.teams, obj.players);
	}
}

module.exports = STLiveGame;
