const { HOST } = require("../utils/requests.js");

class STCountry
{
	/*
	String abbrev;
	String name;
	String flag;
	*/
	constructor(/*String*/ abbrev, /*String*/ name)
	{
		this.abbrev = abbrev || "__";
		this.name   = name   || "Unknown";
		this.flag   = `${HOST}/images/flags/${this.abbrev}.png`;
	}
}

module.exports = STCountry;
