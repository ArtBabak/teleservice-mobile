import React, { FC } from "react";
import styles from "./index.module.css";
import SupportIcon from "../../../../shared/assets/icons/nav-icons/SupportIcon";
import SingleTicket from "../SingleTicket";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { ITicket } from "../../../../types";

const TicketDescriptionChat: FC = () => {
  const ticketsObj: any = useTypedSelector((state) => state.ticketReducer);
  const tickets: ITicket[] = ticketsObj.tickets;
  return (
    <div className={styles["ticket-description__chat"]}>
      <div className={styles["ticket-description__bot-notification"]}>
        <SupportIcon className={styles.icon} />
        <div className={styles["ticket-description__bot-notification_message"]}>
          <h3>Bot Name</h3>
          <p>Hi User Name, we're here to help you. How can I help you today?</p>
          <a>My Device</a>
          <a>My Contract</a>
          <a>Return Device</a>
        </div>
      </div>
      {tickets.map((ticket) => (
        <SingleTicket key={ticket.num} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketDescriptionChat;
