const STActivity = require("./activity.js");

class STServerActivity
{
	/*
	Array<STActivity> day;
	Array<STActivity> month;
	*/

	constructor(/*Array<Object>*/ day, /*Array<Object>*/ month)
	{
		this.day   = day.map(x => new STActivity(new Date(x.timestamp), x.numplayers));
		this.month = month.map(x => new STActivity(new Date(x.date), x.count));
	}
}

module.exports = STServerActivity;
