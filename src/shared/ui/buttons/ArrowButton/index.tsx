import React, { CSSProperties, FC } from "react";
import styles from "./index.module.css";

interface ArrowButtonProps {
  style?: CSSProperties;
}

const ArrowButton: FC<ArrowButtonProps> = ({ style }) => {
  return (
    <button style={style} className={styles["arrow-button"]}>
      {">"}
    </button>
  );
};

export default ArrowButton;
