const   STProperty        = require("../struct/property.js");
const { NoOverrideError } = require("../utils/errors.js");

// asynchronous class, might not have all properties on initialization
class STAsync
{
	/*
	Boolean           _full;
	Array<STProperty> _neededProps;
	*/
	constructor(/*Array<String>*/ neededProps, /*Object*/ from)
	{
		this._full = false;
		this._neededProps = neededProps.map(
			prop => new STProperty(prop[0] == '?', prop.substr(prop[0] == '?'))
		);
		this.copyProps(from);
	}

	// copy the properties of FROM to this, returns this
	/*STAsync*/ copyProps(/*Object*/ from)
	{
		// filter out the properties from doesn't have
		let props = this._neededProps.filter(prop => from.hasOwnProperty(prop));
		// copy the properties we want
		for (let prop of props) this[prop] = from[prop];
		// full if we have all needed properties
		this._full = this._full || this._neededProps.every(
			prop => prop.optional || this.hasOwnProperty(prop)
		);
		return this;
	}

	// fetch and return this
	async /*STAsync*/ fetch() { throw new NoOverrideError(this, "fetch()"); }
	// set properties based on the return of an API call
	/*STAsync*/ set(/*Object*/ from) { throw new NoOverrideError(this, "set()"); }
}

module.exports = STAsync;
