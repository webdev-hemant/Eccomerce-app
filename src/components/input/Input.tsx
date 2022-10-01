import styles from "./input.module.scss";

interface Iprops {
  type: string;
  value: string;
  onChange: (_: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (_: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  style?: React.CSSProperties;
}

const Input = (props: Iprops) => {
  const {
    type = "text",
    placeholder,
    onChange,
    onFocus,
    value,
    maxLength,
    minLength,
    required = false,
    name = "",
    style = {},
    ...rest
  } = props;

  return (
    <div className={styles.inputContainer}>
      <label>
        <input
          type={type}
          value={value}
          onChange={onChange}
          name={name}
          required={required}
          maxLength={maxLength}
          minLength={minLength}
          placeholder={placeholder}
          onFocus={onFocus}
          className={styles.input}
          style={style}
          {...rest}
        />
      </label>
    </div>
  );
};

export default Input;
