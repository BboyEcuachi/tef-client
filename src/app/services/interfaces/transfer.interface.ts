import { Receiver } from "./receiver.interface";

export interface Transfer {
	id?: string;
	userId?: string;
	amount: number;
	receiver: Receiver
};