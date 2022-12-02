import React, { FC } from "react";

interface DeviceIconProps {
  className?: string;
  width?: string;
  height?: string;
  fill?: string;
}

const DeviceIcon: FC<DeviceIconProps> = ({
  fill,
  className,
  width,
  height,
}) => {
  return (
    <svg
      fill={fill ? fill : ""}
      width={width ? width : "14"}
      height={height ? height : "24"}
      viewBox="0 0 14 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.35 0H1.65008C0.758653 0 0.0290527 0.728914 0.0290527 1.62103V22.3783C0.0290527 23.2704 0.758653 24 1.65008 24H12.35C13.2414 24 13.971 23.2718 13.971 22.379V1.62103C13.971 0.728914 13.2414 0 12.35 0ZM5.28848 1.16846H8.71157C8.81991 1.16846 8.90768 1.25623 8.90768 1.36526C8.90768 1.4736 8.81991 1.56137 8.71157 1.56137H5.28848C5.18014 1.56137 5.09237 1.4736 5.09237 1.36526C5.09237 1.25623 5.18014 1.16846 5.28848 1.16846ZM7.00002 23.1895C6.55225 23.1895 6.18951 22.8267 6.18951 22.3783C6.18951 21.9298 6.55225 21.5678 7.00002 21.5678C7.4478 21.5678 7.81054 21.9298 7.81054 22.3783C7.81054 22.8267 7.4478 23.1895 7.00002 23.1895ZM12.843 21H1.15705V2.57074H12.843V21Z" />
    </svg>
  );
};

export default DeviceIcon;
