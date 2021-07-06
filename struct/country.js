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
		this.abbrev = abbrev;
		this.name   = name;
		this.flag   = `${HOST}/images/flags/${abbrev}.png`;
	}
}

module.exports = STCountry;
