import React, { FC } from "react";
import styles from "./index.module.css";
import PreviousPageButton from "../../../../shared/ui/buttons/PreviousPageButton";
import PrimaryButton from "../../../../shared/ui/buttons/PrimaryButton";
import OutlineButton from "../../../../shared/ui/buttons/OutlineButton";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { useLocation } from "react-router-dom";
import { IDevice } from "../../../../types";

const DeviceInfo: FC = () => {
  const location: string = useLocation().pathname;
  const id: number = +location.split("/").slice(-1)[0];

  const devicesObj: any = useTypedSelector((state) => state.devicesReducer);
  const devices: IDevice[] = devicesObj.devices;

  const currentDevice: IDevice | undefined = devices.find(
    (device) => device.id === id
  );

  return (
    <div className={styles["devices-info-page"]}>
      <PreviousPageButton to="/devices" />
      <h2>My Devices</h2>
      <div className={styles["devices-info-page__card"]}>
        <h3>{currentDevice?.name}</h3>
        <h4>Features</h4>
        <div className={styles["devices-info-page__card__feature"]}>
          <h5>Screen</h5>
          <p>{currentDevice?.screen}</p>
        </div>
        <div className={styles["devices-info-page__card__feature"]}>
          <h5>Camera</h5>
          <p>{currentDevice?.camera}</p>
        </div>
        <div className={styles["devices-info-page__card__feature"]}>
          <h5>Capacity</h5>
          <p>
            {currentDevice?.capacity}GB{" "}
            <strong>
              + {currentDevice?.extraCapacity}GB with extra payment
            </strong>
          </p>
        </div>
      </div>
      <OutlineButton>Order Physical Add Ons</OutlineButton>
      <PrimaryButton>Request support</PrimaryButton>
    </div>
  );
};

export default DeviceInfo;
