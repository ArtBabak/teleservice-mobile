import React, { FC } from "react";
import styles from "./index.module.css";
import { ITicket } from "../../../../types";

interface SingleTicketProps {
  ticket: ITicket;
}

const SingleTicket: FC<SingleTicketProps> = (ticket) => {
  return (
    <div className={styles["single-ticket"]}>
      <h3>{`Ticket #${ticket.ticket.num}`}</h3>
      <p>
        Topic: <span>{ticket.ticket.topic}</span>
      </p>
      <p>{`${ticket.ticket.message}`}</p>
    </div>
  );
};

export default SingleTicket;
