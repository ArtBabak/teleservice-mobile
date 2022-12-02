import React, { FC } from "react";
import styles from "./index.module.css";
import PreviousPageButton from "../../../../shared/ui/buttons/PreviousPageButton";
import SearchIcon from "../../../../shared/assets/icons/SearchIcon";
import TicketOption from "../../ui/TicketOption";
import QuestionsIcon from "../../../../shared/assets/icons/ticket-icons/QuestionsIcon";
import BrokenIcon from "../../../../shared/assets/icons/ticket-icons/BrokenIcon";
import LostIcon from "../../../../shared/assets/icons/ticket-icons/LostIcon";
import SIMIcon from "../../../../shared/assets/icons/ticket-icons/SIMIcon";

const TicketSelection: FC = () => {
  return (
    <div className={styles["ticket-selection-page"]}>
      <PreviousPageButton to="/home" />
      <h2>How can we help you?</h2>
      <div className={styles["ticket-selection-page__input"]}>
        <input type="text" placeholder="Search" />
        <SearchIcon />
      </div>
      <h3>Or choose an option below</h3>
      <div className={styles["ticket-selection-page__options"]}>
        <TicketOption
          to="/ticket/questions"
          icon={<QuestionsIcon />}
          description="Questions"
        />
        <TicketOption
          to="/ticket/broken"
          icon={<BrokenIcon />}
          description="Device Broken"
        />
        <TicketOption
          to="/ticket/stolen"
          icon={<LostIcon />}
          description="Device Lost or Stolen"
        />
        <TicketOption
          to="/ticket/sim"
          icon={<SIMIcon />}
          description="SIM Card"
        />
      </div>
      <a className={styles["ticket-selection-page__anchor"]}>
        Still need help?
      </a>
    </div>
  );
};

export default TicketSelection;
