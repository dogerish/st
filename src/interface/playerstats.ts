import { STStats } from "../class/stats"

/** Structure for player statistics in different game modes and in total. */
export interface STPlayerStats
{
	/** The stats for instagib modes. */
	insta: STStats;
	/** The stats for efficiency modes. */
	effic: STStats;
	/** The stats for all modes combined. */
	total: STStats;
}
