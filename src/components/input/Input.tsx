import { useEffect, useRef, useState } from "react";
import viewPassword from "images/viewpassword.png";
import hidePassword from "images/hidepassword.png";
import styles from "./input.module.scss";

interface Iprops {
  type: string;
  value: string;
  onChange: (_: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (_: React.FocusEvent<HTMLInputElement>) => void;
  getRef?: (_: React.MutableRefObject<any>) => void;
  placeholder?: string;
  name?: string;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  label?: string;
  inputStyle?: React.CSSProperties;
  divStyle?: React.CSSProperties;
  errorMessage?: string;
  isError?: boolean;
  onBlur?: (_: React.FocusEvent<HTMLInputElement, Element>) => void;
}

const Input = (props: Iprops) => {
  const inputRef = useRef<any>(null);
  const [password, setPassword] = useState<"password" | "text">("password");
  const {
    type = "text",
    placeholder = "",
    onChange,
    onFocus,
    getRef,
    value,
    maxLength,
    minLength,
    required = false,
    name = "",
    inputStyle = {},
    divStyle = {},
    label = "",
    isError = false,
    errorMessage = "*Please enter valid value",
    onBlur,
    ...rest
  } = props;

  useEffect(() => {
    if (inputRef) getRef?.(inputRef);
  }, [getRef]);

  return (
    <div style={divStyle} className={styles.inputContainer}>
      <label
        onClick={() => inputRef?.current?.focus()}
        className={styles.label}
      >
        {label}
      </label>
      <input
        ref={inputRef}
        type={type === "password" ? password : type}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        name={name}
        required={required}
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
        className={`${styles.input} ${
          type === "password" && styles.paddingForEye
        }`}
        style={inputStyle}
        {...rest}
      />

      <div className={styles.errorWrapper}>
        <p className={styles.errorMessage}>{isError && errorMessage}</p>
      </div>

      {type === "password" && (
        <div
          onClick={() =>
            setPassword((prev) => (prev === "password" ? "text" : "password"))
          }
          className={`${styles.passwordIconWrapper} ${
            isError && styles.isError
          }`}
        >
          <img
            src={password === "password" ? hidePassword : viewPassword}
            alt={password === "password" ? "hide password" : "view password"}
          />
        </div>
      )}
    </div>
  );
};

export default Input;
