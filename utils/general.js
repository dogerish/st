const http = require("http");
const STGamePlayer = require("../struct/gameplayer.js");
const STTeam       = require("../struct/team.js");

const percent = /*Number*/ (/*Number*/ n, /*Number*/ t) => Math.round(n / t * 100);

// returns teams and players as STTeam and STGamePlayer objects
function /*Array<Array<STTeam>, Array<STGamePlayer>>*/ getTeamsAndPlayers(
	/*Array<STTeamResolvable>*/ teams,
	/*Array<STGamePlayerResolvable>*/ players
)
{
	teams = new Map(teams.map(
			({ name, score }) => [name, new STTeam(name, score)]
	));
	players = players.map(player =>
	{
		player.team = teams.get(player.team);
		return new STGamePlayer(player);
	});
	return [Array.from(teams.values()), players];
}

// export
module.exports =
{
	percent,
	getTeamsAndPlayers
};
