/** Structure holding information about a server. */
export interface STServerInfo
{
	/** A link to the server's website, or an empty string. */
	website: string;
	/** Might be a URL to the server's demos, or an empty string. */
	demourl: string;
	/**
	 * Empty string or null if the server is not banned from tracking, and 
	 * otherwise a string describing the reason for the ban.
	 */
	banned: string | null;
}
