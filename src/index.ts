import { STAsync          } from "./class/async";
import { STClan           } from "./class/clan";
import { STCountry        } from "./class/country";
import { STGame           } from "./class/game";
import { STGamePlayer     } from "./class/gameplayer";
import { STLiveGame       } from "./class/livegame";
import { STMatch          } from "./class/match";
import { STPlayer         } from "./class/player";
import { STResults        } from "./class/results";
import { STServer         } from "./class/server";
import { STServerActivity } from "./class/serveractivity";
import { STStats          } from "./class/stats";
import { STWinStats       } from "./class/winstats";

import * as errors   from "./utils/errors";
import * as general  from "./utils/general";
import * as requests from "./utils/requests";

module.exports = {
	STAsync, STClan, STCountry, STGame, STGamePlayer, STLiveGame, STMatch, 
	STPlayer, STResults, STServer, STServerActivity, STStats, STWinStats,

	utils: {
		errors, general, requests
	}
}
