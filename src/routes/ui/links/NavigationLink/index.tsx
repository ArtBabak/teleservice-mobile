import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface NavigationLinkProps {
  icon: ReactNode;
  name: string;
  className?: string;
  to: string;
}

const NavigationLink: FC<NavigationLinkProps> = ({
  icon,
  name,
  className,
  to,
}) => {
  return (
    <Link to={to} className={className}>
      {icon}
      <p>{name}</p>
    </Link>
  );
};

export default NavigationLink;
