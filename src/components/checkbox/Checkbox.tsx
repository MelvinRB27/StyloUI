import React, { useState } from "react";
import styles from "./Checkbox.module.css";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  labelAlign?: "left" | "right" | "top" | "bottom";
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  labelAlign = "right",
  checked = false,
  onCheckedChange,
}) => {
  const flexDirection =
    labelAlign === "left"
      ? "row-reverse"
      : labelAlign === "top"
      ? "column-reverse"
      : labelAlign === "bottom"
      ? "column"
      : "row";

  return (
    <label
      className={styles.checkboxContainer}
      style={{ flexDirection: flexDirection }}
    >
      <input
        type="checkbox"
        // checked={checked}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
        className={styles.checkbox}
      />

      {label && <span className={styles.checkboxLabel}>{label}</span>}
    </label>
  );
};

export default Checkbox;
