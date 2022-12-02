import React, { FC, useState } from "react";
import PrimaryButton from "../../../../shared/ui/buttons/PrimaryButton";
import styles from "./index.module.css";
import { useDispatch } from "react-redux";
import { AuthActionTypes } from "../../../../types/auth";

const AuthForm: FC = () => {
  const dispatch = useDispatch();
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmailValue(e.target.value);

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPasswordValue(e.target.value);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: AuthActionTypes.LOG_IN,
      payload: { email: emailValue, password: passwordValue },
    });
    setEmailValue("");
    setPasswordValue("");
  };

  return (
    <form onSubmit={submitHandler} className={styles["login__form"]}>
      <h2>Log in</h2>
      <input
        value={emailValue}
        onChange={emailChangeHandler}
        type="email"
        placeholder="Enter your email"
      />
      <input
        value={passwordValue}
        onChange={passwordChangeHandler}
        type="password"
        placeholder="Enter your password"
      />
      <a>Forgotten password?</a>
      <PrimaryButton>Login</PrimaryButton>
    </form>
  );
};

export default AuthForm;
