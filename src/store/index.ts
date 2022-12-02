import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../modules/auth/store/authReducer";
import { devicesReducer } from "../modules/devices/store/devicesReducer";
import { ticketReducer } from "../modules/support/store/ticketsReducer";

const rootReducer = combineReducers({
  authReducer,
  devicesReducer,
  ticketReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({ reducer: rootReducer });
