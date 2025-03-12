import React from "react";
import styles from "./Radio.module.css";

export interface RadioInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  labelAlign?: "left" | "right" | "top" | "bottom";
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Radio: React.FC<RadioInputProps> = ({
  className,
  label,
  labelAlign,
  onCheckedChange,
  ...props
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
      className={styles.radioContainer}
      style={{ flexDirection: flexDirection }}
    >
      <input
        type="radio"
        {...props}
        onChange={(e) => onCheckedChange?.(e.target.checked)}
        className={`${styles.radio} ${className ?? ""}`}
      />

      {label && <span className={styles.radioLabel}>{label}</span>}
    </label>
  );
};
export default Radio;
