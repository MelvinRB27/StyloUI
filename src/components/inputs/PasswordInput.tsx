import React, { useState } from "react";
import styles from "./Input.module.css";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  startIcon?: React.ReactNode;
  showIcon?: React.ReactNode;
  hideIcon?: React.ReactNode;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  className,
  startIcon,
  showIcon = <FaRegEye />,
  hideIcon = <FaRegEyeSlash />,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`${styles["StyloUI-InputContainer"]} ${className || ""}`}>
      {startIcon && <span className={styles["StyloUI-Icon"]}>{startIcon}</span>}
      <input
        type={showPassword ? "text" : "password"}
        className={styles["StyloUI-Input"]}
        {...props}
      />
      <span
        className={styles["StyloUI-Icon"]}
        onClick={() => setShowPassword(!showPassword)}
        style={{ cursor: "pointer" }}
      >
        {showPassword ? hideIcon : showIcon}
      </span>
    </div>
  );
};
