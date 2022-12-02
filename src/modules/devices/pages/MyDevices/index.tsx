import React, { FC } from "react";
import styles from "./index.module.css";
import PreviousPageButton from "../../../../shared/ui/buttons/PreviousPageButton";
import SingleDevice from "../../ui/SingleDevice";
import PrimaryButton from "../../../../shared/ui/buttons/PrimaryButton";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

const MyDevices: FC = () => {
  const { devices } = useTypedSelector((state) => state.devicesReducer);
  return (
    <div className={styles["devices-page"]}>
      <div className={styles["devices-info"]}>
        <PreviousPageButton to="/home" />
        <h2>My Devices</h2>
        <h3>Current devices</h3>
      </div>
      <ul className={styles["devices-list"]}>
        {devices.map((device) => (
          <SingleDevice key={device.id} device={device} />
        ))}
      </ul>
      <div className={styles["devices-page__order-button"]}>
        <PrimaryButton>Order New Device</PrimaryButton>
      </div>
    </div>
  );
};

export default MyDevices;
