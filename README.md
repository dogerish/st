# st-js
Library for working with the [SauerTracker](https://sauertracker.net/) API in JavaScript. Created for [dogerbot-v2](https://github.com/dogerish/dogerbot-v2).

## Installation
Since this is available on npm as `sauertracker`, this can be installed as an npm dependency with `npm install sauertracker`.

## Documentation
Documentation should be complete, and hopefully be updated as the library gains functionality. Please make an issue or let me know another way if you feel something is missing or incorrect.

### Classes
* [STAsync](docs/class/async.md)
	* [STClan](docs/class/clan.md)
	* [STGame](docs/class/game.md)
	* [STPlayer](docs/class/player.md)
	* [STServer](docs/class/server.md)

### Structures
* [STClanMember](docs/struct/clanmember.md)
* [STCountry](docs/struct/country.md)
* [STDuels](docs/struct/duels.md)
* [STGamePlayer](docs/struct/gameplayer.md)
* [STLiveGame](docs/struct/livegame.md)
* [STPlayerStats](docs/struct/playerstats.md)
* [STProperty](docs/struct/property.md)
* [STServerInfo](docs/struct/serverinfo.md)
* [STStats](docs/struct/stats.md)
* [STTeam](docs/struct/team.md)

### Utilities
* [General Utilities](docs/utils/general.md)
* [Requests](docs/utils/requests.md)
#### Errors
* [SelfAwareError](docs/utils/errors/selfawareerror.md)
	* [NoOverrideError](docs/utils/errors/nooverrideerror.md)
	* [NonJSONReturnError](docs/utils/errors/nonjsonreturnerror.md)
	* [HTTPError](docs/utils/errors/httperror.md)
	* [NotFoundError](docs/utils/errors/notfounderror.md)
		* [ClanNotFoundError](docs/utils/errors/clannotfounderror.md)
		* [GameNotFoundError](docs/utils/errors/gamenotfounderror.md)
		* [PlayerNotFoundError](docs/utils/errors/playernotfounderror.md)
		* [ServerNotFoundError](docs/utils/errors/servernotfounderror.md)
