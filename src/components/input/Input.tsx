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
  const [showPassword, setShowPassword] = useState<boolean>(false);
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
        type={
          type !== "password"
            ? type
            : (type === "password" && showPassword && "text") || "password"
        }
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
      {isError && (
        <div className={styles.errorWrapper}>
          <p className={styles.errorMessage}>{errorMessage}</p>
        </div>
      )}
      {type === "password" && (
        <div
          onClick={() => setShowPassword((prev) => !prev)}
          className={styles.passwordIconWrapper}
        >
          {showPassword ? (
            <img src={viewPassword} alt="view password" />
          ) : (
            <img src={hidePassword} alt="hide password" />
          )}
        </div>
      )}
    </div>
  );
};

export default Input;
