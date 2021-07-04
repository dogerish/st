class STServerInfo
{
	/*
	String website;
	String demourl;
	String banned;
	*/
	constructor(/*Object*/ from)
	{
		for (let key of ["website", "demourl", "banned"])
			this[key] = from[key];
	}
}

module.exports = STServerInfo;
