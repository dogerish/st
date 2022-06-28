import { HOST } from "../utils/requests";

export class STCountry
{
	public flag: string;

	constructor(public abbrev: string = "__", public name: string = "Unknown")
	{
		this.flag = `${HOST}/images/flags/${this.abbrev}.png`;
	}
}
