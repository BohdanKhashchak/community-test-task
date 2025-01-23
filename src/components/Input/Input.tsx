import styles from "./Input.module.scss";

interface InputProps {
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
}

const Input = ({ value, setValue, placeholder = "" }: InputProps) => {
  return (
    <input
      className={styles.input}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Input;
