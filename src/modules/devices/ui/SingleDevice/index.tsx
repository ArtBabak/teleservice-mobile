import React, { FC } from "react";
import styles from "./index.module.css";
import DeviceIcon from "../../../../shared/assets/icons/nav-icons/DeviceIcon";
import ArrowButton from "../../../../shared/ui/buttons/ArrowButton";
import { IDevice } from "../../../../types";
import { Link } from "react-router-dom";

interface SingleDeviceProps {
  device: IDevice;
}

const SingleDevice: FC<SingleDeviceProps> = (device) => {
  const timestamp: number = device.device.orderDate;
  const date: string = new Date(timestamp).toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <Link to={`/device/${device.device.id}`}>
      <li className={styles["devices-page__single-device"]}>
        <DeviceIcon height="32" width="19" fill="#198D99" />
        <div className={"devices-page__single-device__info"}>
          <h4>{device.device.name}</h4>
          <p>Order {date}</p>
        </div>
        <ArrowButton style={{ backgroundColor: "white" }} />
      </li>
    </Link>
  );
};

export default SingleDevice;
