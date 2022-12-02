import React, { FC } from "react";
import styles from "./index.module.css";
import SectionOverview from "../../ui/SectionOverview";
import DevicesIcon from "../../../../shared/assets/icons/landing-icons/DevicesIcon";
import ContractsIcon from "../../../../shared/assets/icons/landing-icons/ConstractsIcon";
import TicketsIcon from "../../../../shared/assets/icons/landing-icons/TicketsIcon";
import PrimaryButton from "../../../../shared/ui/buttons/PrimaryButton";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { IDevice } from "../../../../types";

const LandingPage: FC = () => {
  const devices: IDevice[] = useTypedSelector(
    (store) => store.devicesReducer
  ).devices;
  const lastDevice: IDevice = devices[0];
  const timestamp: number = lastDevice.orderDate;
  const date: string = new Date(timestamp).toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
  const ticketsObj: any = useTypedSelector((state) => state.ticketReducer);
  const count: number = ticketsObj.count;

  return (
    <div className={styles["landing-page"]}>
      <h2>Hello!</h2>
      <div className={styles["landing-page__sections"]}>
        <SectionOverview
          to="/devices"
          header="Devices"
          secondHeader={lastDevice.name}
          description={`Ordered ${date}`}
          icon={<DevicesIcon />}
        />
        <SectionOverview
          to="/home"
          header="Contracts"
          secondHeader="Contract name"
          description="Ordered 12.01.2021"
          icon={<ContractsIcon />}
        />
        <SectionOverview
          to="/tickets"
          header="Tickets"
          secondHeader="What can we help you with?"
          description={`You have ${count} ticket${count > 1 ? "s" : ""} open`}
          icon={<TicketsIcon />}
        />
      </div>
      <PrimaryButton>New Order</PrimaryButton>
    </div>
  );
};

export default LandingPage;
