import React from "react";
import styles from "./index.module.css";
import MainLogo from "../../../../shared/assets/logos/MainLogo";
import AuthForm from "../../ui/AuthForm";

const Login = () => {
  return (
    <div className={styles["login-page"]}>
      <MainLogo className={styles.logo} />
      <AuthForm />
      <p>
        Don't have an account? <a>Sign up</a>
      </p>
      <div className={styles.test}>
        <span>Email: connection.babak@gmail.com</span>
        <span>pass: babak555</span>
      </div>
    </div>
  );
};

export default Login;
