import React from "react";
import styles from "./Button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  size,
  className,
  children,
  ...props
}) => {
  const classes = ` ${styles["StyloUI-button"]} ${size && styles[size]} ${
    variant && styles[variant]
  }`;
  return (
    <button
      className={`${styles.button} ${classes}  ${className || ""} `}
      {...props}
    >
      {children}
    </button>
  );
};
