import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  isActive = true,
  onClick,
  ...rest
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (isActive && onClick) {
      onClick(e);
    }
  };

  return (
    <button
      {...rest}
      className={`${styles.button} ${!isActive ? styles.inactive : ""}`}
      onClick={handleClick}
      disabled={!isActive}
    >
      {children}
    </button>
  );
};

export default Button;
