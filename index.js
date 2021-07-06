module.exports =
{
	// classes
	STAsync:  require("./class/async.js"),
	STClan:   require("./class/clan.js"),
	STGame:   require("./class/game.js"),
	STPlayer: require("./class/player.js"),
	STServer: require("./class/server.js"),

	// structures
	STClanMember:  require("./struct/clanmember.js"),
	STCountry:     require("./struct/country.js"),
	STDuels:       require("./struct/duels.js"),
	STGamePlayer:  require("./struct/gameplayer.js"),
	STLiveGame:    require("./struct/livegame.js"),
	STPlayerStats: require("./struct/playerstats.js"),
	STServerInfo:  require("./struct/serverinfo.js"),
	STStats:       require("./struct/stats.js"),
	STTeam:        require("./struct/team.js"),

	// utilities
	utils:
	{
		errors:   require("./utils/errors.js"),
		general:  require("./utils/general.js"),
		requests: require("./utils/requests.js")
	}
};
