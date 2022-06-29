import { STActivity } from "../interface/activity";

/** The raw type of day attained from the API */
export type rawDay = { timestamp: string | number, numplayers: number };
/** The raw type of month attained from the API */
export type rawMonth = { date: string | number, count: number };

/** Structure for holding data on the day and month activity of a server. */
export class STServerActivity
{
	/**
	 * The day activity of the server. Number of players at different times of 
	 * today.
	 */
	day: STActivity[];
	/**
	 * The month activity of the server. Number of games per day for the last 
	 * 15 days.
	 */
	month: STActivity[];

	constructor(day: rawDay[], month: rawMonth[])
	{
		this.day = day.map(
			(x: rawDay): STActivity => {
				return { date: new Date(x.timestamp), count: x.numplayers };
			}
		);
		this.month = month.map(
			(x: rawMonth): STActivity => {
				return { date: new Date(x.date), count: Number(x.count) };
			}
		);
	}
}
