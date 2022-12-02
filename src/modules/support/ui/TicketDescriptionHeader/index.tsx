import React, { FC } from "react";
import styles from "./index.module.css";
import PreviousPageButton from "../../../../shared/ui/buttons/PreviousPageButton";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

const TicketDescriptionHeader: FC = () => {
  const ticketsObj: any = useTypedSelector((state) => state.ticketReducer);
  const count: number = ticketsObj.count;
  return (
    <div className={styles["ticket-description__header"]}>
      <PreviousPageButton to="/tickets" />
      <h2>Tickets</h2>
      <p>Ticket #{count + 1}</p>
    </div>
  );
};

export default TicketDescriptionHeader;
