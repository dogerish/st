/**
 * Base class for classes that can asynchronously fetch their data from the 
 * API.
 */
export abstract class STAsync
{
	/** True if the class was fetched */
	protected fetched: boolean = false;

	/**
	 * @returns True if this object is fetched
	 */
	isFetched(): boolean { return this.fetched; }

	/**
	 * Fetches the data from the API, filling out the current object. This 
	 * should be an asynchronous function.
	 *
	 * @returns This object after fetching
	 */
	abstract fetch(): Promise<any>;

	/**
	 * Sets properties based on the response sent from a request
	 *
	 * @param data - The response data from the API
	 *
	 * @returns This object after setting properties
	 */
	abstract set(data: any): any;
}
