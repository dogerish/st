/** Structure representing a member of a clan. */
export interface STClanMember
{
	/** The name of the member. Can be resolved into an [STPlayer](STPlayer) */
	name: string;
	/** The date at which the member was last seen */
	lastseen: Date;
}
