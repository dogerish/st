class STClanMember
{
	/*
	String name;
	Date   lastseen;
	*/
	constructor(/*String*/ name, /*DateResolvable*/ lastseen)
	{
		this.name     = name;
		this.lastseen = new Date(lastseen);
	}
}

module.exports = STClanMember;
