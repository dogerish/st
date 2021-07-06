class STProperty
{
	/*
	Boolean optional;
	String  key;
	*/
	constructor(/*Boolean*/ optional, /*String*/ key)
	{
		this.optional = optional;
		this.key      = key;
	}

	toString() { return this.key; }
}

module.exports = STProperty;
