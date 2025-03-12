import React from "react";
import styles from "./Switch.module.css";

export interface SwitchProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  activeIcon?: React.ReactNode;
  inactiveIcon?: React.ReactNode;
}

export const Switch: React.FC<SwitchProps> = ({
  label,
  checked,
  onChange,
  activeIcon,
  inactiveIcon,
}) => {
  return (
    <label className={styles["StyloUI-Container"]}>
      <input
        type="checkbox"
        className={styles["StyloUI-Switch"]}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <div className={styles["StyloUI-Track"]}>
        <div className={styles["StyloUI-Thumb"]}>
          {checked ? activeIcon : inactiveIcon}
        </div>
      </div>
      {label && <span className={styles["StyloUI-Switch-label"]}>{label}</span>}
    </label>
  );
};

export default Switch;
