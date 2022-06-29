import { HOST } from "../utils/requests";

/** Structure representing a country. */
export class STCountry
{
	/**
	 * URL to an image of the country's flag, provided by SauerTracker's flag 
	 * database. Ex: http://sauertracker.net/images/flags/DE.png.
	 */
	flag: string;

	/**
	 * @param abbrev - The abbreviation of the country. Ex: `DE`.
	 * @param name - The name of the country. Ex: `Germany`.
	 */
	constructor(public abbrev: string = "__", public name: string = "Unknown")
	{
		this.flag = `${HOST}/images/flags/${this.abbrev}.png`;
	}
}
