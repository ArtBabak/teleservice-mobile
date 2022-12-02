import React, { FC, ReactNode } from "react";
import styles from "./index.module.css";
import ArrowButton from "../../../../shared/ui/buttons/ArrowButton";
import { Link } from "react-router-dom";

interface SectionOverviewProps {
  header: string;
  secondHeader: string;
  description: string;
  icon: ReactNode;
  to: string;
}

const SectionOverview: FC<SectionOverviewProps> = ({
  header,
  secondHeader,
  description,
  icon,
  to,
}) => {
  return (
    <section className={styles["landing__section-overview"]}>
      <div className={styles["landing__section-overview__header"]}>
        <h3>{header}</h3>
        <Link to={to}>See all</Link>
      </div>
      <Link to={to}>
        <div className={styles["landing__section-overview__card"]}>
          {icon}
          <div className={styles["landing__section-overview__card__info"]}>
            <h4>{secondHeader}</h4>
            <p>{description}</p>
          </div>
          <ArrowButton />
        </div>
      </Link>
    </section>
  );
};

export default SectionOverview;
