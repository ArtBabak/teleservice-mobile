import React, { FC } from "react";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

interface PreviousPageButtonProps {
  to: string;
}

const PreviousPageButton: FC<PreviousPageButtonProps> = ({ to }) => {
  return (
    <Link to={to}>
      <button className={styles["prev-page-button"]}>{"<"}</button>;
    </Link>
  );
};

export default PreviousPageButton;
