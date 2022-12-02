import React, { FC } from "react";
import icon from "./TicketsIcon.svg";

interface TicketsIconProps {
  className?: string;
}

const TicketsIcon: FC<TicketsIconProps> = ({ className }) => {
  return (
    <img className={className} src={icon} alt="landing page tickets icon" />
  );
};

export default TicketsIcon;
