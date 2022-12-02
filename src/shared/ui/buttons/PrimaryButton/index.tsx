import React, { FC, ReactNode } from "react";
import styles from "./index.module.css";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

const PrimaryButton: React.FC<ButtonProps> = ({ children, className }) => {
  return (
    <button className={`${className ? className : ""} ${styles.button}`}>
      {children}
    </button>
  );
};

export default PrimaryButton;
