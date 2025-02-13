import { BADGES } from "@constants/badge";

export interface Badge {
	badge: typeof BADGES[keyof typeof BADGES] | number;
	color: [string, string];
}