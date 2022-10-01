import Input from "components/input/Input";
import LoginImg from "images/login.png";
import { useState } from "react";
import styles from "./signup.module.scss";

const Signup = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <div className={styles.signupWrapper}>
      <div className={styles.imgWrapper}>
        <img loading="lazy" src={LoginImg} alt="" />
      </div>
      <div className={styles.loginFormContainer}>
        <div className={styles.loginForm}>
          <h2 className={styles.titleLogin}>Login Form</h2>
          <Input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            style={{ border: "1px solid #000" }}
            placeholder="username"
          />
          <Input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            style={{ border: "1px solid #000" }}
            placeholder="password"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
