import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../../modules/auth/pages/Login";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AuthRoutes;
