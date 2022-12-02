import React, { FC } from "react";
import styles from "./index.module.css";
import TicketDescriptionHeader from "../../ui/TicketDescriptionHeader";
import TicketDescriptionChat from "../../ui/TicketDescriptionChat";
import TicketDescriptionForm from "../../ui/TicketDescriptionForm";

const TicketDescription: FC = () => {
  return (
    <div className={styles["ticket-description"]}>
      <TicketDescriptionHeader />
      <TicketDescriptionChat />
      <TicketDescriptionForm />
    </div>
  );
};

export default TicketDescription;
