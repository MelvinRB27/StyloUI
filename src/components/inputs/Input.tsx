import React from "react";
import styles from "./Input.module.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export const Input: React.FC<InputProps> = ({
  className,
  startIcon,
  endIcon,
  ...props
}) => {
  return (
    <div className={`${styles["StyloUI-InputContainer"]} ${className || ""}`}>
      {startIcon && <span className={styles["StyloUI-Icon"]}>{startIcon}</span>}
      <input className={styles["StyloUI-Input"]} {...props} />
      {endIcon && <span className={styles["StyloUI-Icon"]}>{endIcon}</span>}
    </div>
  );
};
