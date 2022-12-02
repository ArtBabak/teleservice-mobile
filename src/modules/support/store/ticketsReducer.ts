import {
  TicketAction,
  TicketsActionTypes,
  TicketState,
} from "../../../types/tickets";

const initialState: TicketState = {
  count: 1,
  tickets: [{ topic: "question", message: "i have got a question", num: 1 }],
};

export const ticketReducer = (
  state = initialState,
  action: TicketAction
): TicketState => {
  switch (action.type) {
    case TicketsActionTypes.ADD_TICKET:
      return {
        count: state.count + 1,
        tickets: [...state.tickets, action.payload],
      };
    default:
      return state;
  }
};
