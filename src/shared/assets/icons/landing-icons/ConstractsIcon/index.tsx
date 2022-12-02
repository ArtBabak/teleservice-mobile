import React, { FC } from "react";
import icon from "./ContractsIcon.svg";

interface ContractsIconProps {
  className?: string;
}

const ContractsIcon: FC<ContractsIconProps> = ({ className }) => {
  return (
    <img className={className} src={icon} alt="landing page contracts icon" />
  );
};

export default ContractsIcon;
