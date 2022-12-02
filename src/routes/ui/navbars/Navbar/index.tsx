import React, { FC } from "react";
import styles from "./index.module.css";
import NavigationLink from "../../links/NavigationLink";
import DeviceIcon from "../../../../shared/assets/icons/nav-icons/DeviceIcon";
import SupportIcon from "../../../../shared/assets/icons/nav-icons/SupportIcon";
import ContractIcon from "../../../../shared/assets/icons/nav-icons/ContractIcon";
import HomeIcon from "../../../../shared/assets/icons/nav-icons/HomeIcon";
import OrderIcon from "../../../../shared/assets/icons/nav-icons/OrderIcon";
import { useLocation } from "react-router-dom";

const Navbar: FC = () => {
  const location: string = useLocation().pathname;
  return (
    <nav className={styles.navbar}>
      <NavigationLink
        to="/devices"
        icon={
          <DeviceIcon
            className={`${styles["navbar__link__icon"]} ${
              location.includes("device") ? styles.active : ""
            }`}
          />
        }
        name="Device"
        className={`${styles["navbar__link"]} ${
          location.includes("device") ? styles.active : ""
        }`}
      />
      <NavigationLink
        to="/contracts"
        icon={
          <ContractIcon
            className={`${styles["navbar__link__icon"]} ${
              location === "/contracts" ? styles.active : ""
            }`}
          />
        }
        name="Contract"
        className={`${styles["navbar__link"]} ${
          location === "/contracts" ? styles.active : ""
        }`}
      />
      <NavigationLink
        to="/home"
        icon={
          <HomeIcon
            className={`${styles["navbar__link__icon"]} ${
              location === "/home" || location === "/" ? styles.active : ""
            }`}
          />
        }
        name="Home"
        className={`${styles["navbar__link"]} ${
          location === "/home" || location === "/" ? styles.active : ""
        }`}
      />
      <NavigationLink
        to="/order"
        icon={
          <OrderIcon
            className={`${styles["navbar__link__icon"]} ${
              location === "/order" ? styles.active : ""
            }`}
          />
        }
        name="Order"
        className={`${styles["navbar__link"]} ${
          location === "/order" ? styles.active : ""
        }`}
      />
      <NavigationLink
        to="/tickets"
        icon={
          <SupportIcon
            className={`${styles["navbar__link__icon"]} ${
              location.includes("ticket") ? styles.active : ""
            }`}
          />
        }
        name="Support"
        className={`${styles["navbar__link"]} ${
          location.includes("ticket") ? styles.active : ""
        }`}
      />
    </nav>
  );
};

export default Navbar;
