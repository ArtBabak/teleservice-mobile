import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "../../modules/landing/pages/LandingPage";
import MyDevices from "../../modules/devices/pages/MyDevices";
import DeviceInfo from "../../modules/devices/pages/DeviceInfo";
import TicketSelection from "../../modules/support/pages/TicketSelection";
import TicketDescription from "../../modules/support/pages/TicketDescription";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<LandingPage />} />
      <Route path="/devices" element={<MyDevices />} />
      <Route path="/device/:id" element={<DeviceInfo />} />
      <Route path="/tickets" element={<TicketSelection />} />
      <Route path="/ticket/:id" element={<TicketDescription />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default PrivateRoutes;
