import { ITicket, IUser } from "./index";

export interface TicketState {
  count: number;
  tickets: ITicket[];
}

export enum TicketsActionTypes {
  ADD_TICKET = "ADD_TICKET",
}

interface AddTicketAction {
  type: TicketsActionTypes.ADD_TICKET;
  payload: ITicket;
}

export type TicketAction = AddTicketAction;
