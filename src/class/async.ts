import { STProperty } from "../interface/property";

/**
 * Asynchronous class, may not have all properties on initialization
 */
export abstract class STAsync
{
	protected fetched: boolean = false;

	/**
	 * @returns True if this object is fetched or not
	 */
	isFetched(): boolean { return this.fetched; }

	/**
	 * Fetches the object, filling out the current object. This should be an 
	 * asynchronous function.
	 *
	 * @returns This object after fetching
	 */
	abstract fetch(): Promise<any>;

	/**
	 * Sets properties based on the response sent from a request
	 *
	 * @param data - the response from the API
	 *
	 * @returns This object after setting properties
	 */
	abstract set(data: any): any;
}
