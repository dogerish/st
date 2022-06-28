import { STActivity } from "../interface/activity";

export class STServerActivity
{
	day: STActivity[];
	month: STActivity[];

	constructor(day: any[], month: any[])
	{
		this.day = day.map(
			(x: any): STActivity => {
				return { date: new Date(x.timestamp), count: x.numplayers };
			}
		);
		this.month = month.map(
			(x: any): STActivity => {
				return { date: new Date(x.date), count: Number(x.count) };
			}
		);
	}
}
