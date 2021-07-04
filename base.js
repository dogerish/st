// asynchronous class, might not have all properties on initialization
class STAsync
{
	constructor(/*Array<String>*/ neededProps, /*Object*/ from)
	{
		this._full = false;
		this._neededProps = neededProps.map(prop =>
		{
			return {
				optional: prop[0] == '?',
				key: (prop[0] == '?') ? prop.substr(1) : prop
			};
		});
		this.copyProps(from);
	}

	// copy the properties of FROM to this, returns this
	/*STAsync*/ copyProps(/*Object*/ from)
	{
		// filter out the properties from doesn't have
		let props = this._neededProps.filter(prop => from.hasOwnProperty(prop.key));
		// copy the properties we want
		for (let prop of props) this[prop.key] = from[prop.key];
		// full if we have all needed properties
		this._full = this._full || this._neededProps.every(
			prop => prop.optional || this.hasOwnProperty(prop.key)
		);
		return this;
	}
}

module.exports = STAsync;
