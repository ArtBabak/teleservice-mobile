import { IUser } from "./index";

export interface AuthState {
  isLoggedIn: boolean;
  users: IUser[];
}

export enum AuthActionTypes {
  LOG_IN = "LOG_IN",
}

interface LoginAction {
  type: AuthActionTypes.LOG_IN;
  payload: IUser;
}

export type AuthAction = LoginAction;
