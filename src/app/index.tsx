import React from "react";
import Navbar from "../routes/ui/navbars/Navbar";
import AppRouter from "../routes/AppRouter";
import { useTypedSelector } from "../hooks/useTypedSelector";

function App() {
  const { isLoggedIn } = useTypedSelector((state) => state.authReducer);
  return (
    <React.Fragment>
      <AppRouter />
      {isLoggedIn && <Navbar />}
    </React.Fragment>
  );
}
export default App;
