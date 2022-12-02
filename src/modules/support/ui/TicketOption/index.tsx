import React, { FC, ReactNode } from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

interface TicketOptionProps {
  icon: ReactNode;
  description: string;
  to: string;
}

const TicketOption: FC<TicketOptionProps> = ({ to, icon, description }) => {
  return (
    <Link className={styles["ticket-option"]} to={to}>
      {icon}
      <p>{description}</p>
    </Link>
  );
};

export default TicketOption;
