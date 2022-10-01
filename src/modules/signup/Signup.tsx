import Input from "components/input/Input";
import LoginImg from "images/login.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./signup.module.scss";

interface ILoginProps {
  userName: string;
  password: string;
}
interface IinputError {
  userName: boolean;
  password: boolean;
}

const Signup = () => {
  const [loginForm, setLoginForm] = useState<ILoginProps>({
    userName: "",
    password: "",
  });
  const [inputFormError, setIputFormError] = useState<IinputError>({
    userName: false,
    password: false,
  });
  const navigate = useNavigate();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setIputFormError((prev) => ({ ...prev, [name]: false }));
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    const { name, value } = event.target;
    if (value.length < 5) {
      setIputFormError((prev) => ({ ...prev, [name]: true }));
    }
  };

  const onSubmit = () => {
    const { userName, password } = inputFormError;
    if (!userName && !password) {
      for (const [userName, password] of Object.entries(loginForm)) {
        localStorage.setItem(userName, password);
      }
      navigate("/");
    }
  };

  useEffect(() => {
    // verify if user logged in
    if (localStorage.getItem("userName") && localStorage.getItem("password")) {
      navigate("/");
    }
  }, [navigate]);

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
            onChange={handleChange}
            value={loginForm?.userName}
            inputStyle={{ border: "1px solid #000" }}
            placeholder="username"
            name="userName"
            label="Enter username"
            isError={inputFormError.userName}
            errorMessage="*username should be 5 charactor long"
            onBlur={handleBlur}
          />
          <Input
            type="password"
            onChange={handleChange}
            value={loginForm?.password}
            inputStyle={{ border: "1px solid #000" }}
            divStyle={{ marginTop: "0.5rem" }}
            placeholder="password"
            name="password"
            label="Enter password"
            isError={inputFormError.password}
            errorMessage="*username should be 5 charactor long"
            onBlur={handleBlur}
          />
          <div className={styles.submitWrapper}>
            <button onClick={() => onSubmit()} className={styles.submitButton}>
              submit
            </button>
          </div>
          <p
            style={{
              marginTop: "1rem",
              fontSize: "0.9rem",
              fontWeight: "bolder",
            }}
          >
            *note: Type any username and password you want
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
