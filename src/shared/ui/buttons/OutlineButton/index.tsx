import React, { FC, ReactNode } from "react";
import styles from "./index.module.css";

interface OutlineButtonProps {
  children: ReactNode;
  className?: string;
}

const OutlineButton: React.FC<OutlineButtonProps> = ({
  children,
  className,
}) => {
  return (
    <button className={`${className ? className : ""} ${styles.button}`}>
      {children}
    </button>
  );
};

export default OutlineButton;
