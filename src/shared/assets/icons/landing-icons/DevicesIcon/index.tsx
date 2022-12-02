import React, { FC } from "react";
import icon from "./DevicesIcon.svg";

interface DevicesIconProps {
  className?: string;
}

const DevicesIcon: FC<DevicesIconProps> = ({ className }) => {
  return (
    <img className={className} src={icon} alt="landing page devices icon" />
  );
};

export default DevicesIcon;
