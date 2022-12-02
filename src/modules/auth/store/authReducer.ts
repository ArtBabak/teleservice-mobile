import { AuthAction, AuthActionTypes, AuthState } from "../../../types/auth";

const initialState: AuthState = {
  isLoggedIn: false,
  users: [
    { email: "connection.babak@gmail.com", password: "babak555" },
    { email: "connection.akimov@gmail.com", password: "akimov555" },
  ],
};

export const authReducer = (
  state = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case AuthActionTypes.LOG_IN:
      if (
        state.users.some(
          (user) =>
            user.email === action.payload.email &&
            user.password === action.payload.password
        )
      )
        return { isLoggedIn: true, users: state.users };
      else return { isLoggedIn: false, users: state.users };
    default:
      return state;
  }
};
