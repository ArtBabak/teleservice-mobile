import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../../modules/auth/pages/Login";
import LandingPage from "../../modules/landing/pages/LandingPage";
import MyDevices from "../../modules/devices/pages/MyDevices";
import DeviceInfo from "../../modules/devices/pages/DeviceInfo";
import TicketSelection from "../../modules/support/pages/TicketSelection";
import TicketDescription from "../../modules/support/pages/TicketDescription";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import AuthRoutes from "./AuthRoutes";
import PrivateRoutes from "./PrivateRoutes";

const AppRouter = () => {
  const { isLoggedIn } = useTypedSelector((state) => state.authReducer);

  return (
    <React.Fragment>
      {!isLoggedIn ? <AuthRoutes /> : <PrivateRoutes />}
    </React.Fragment>
  );
};

export default AppRouter;
