import React from "react";
import styles from "./Tab.module.css";
import Text from "../texts/Text";

export interface TabProps {
  label: string;
  value: string;
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Tab = ({ label, className, isActive = false, onClick }: TabProps) => {
  return (
    <div
      className={`${styles["StyloUI-tab-container"]} ${
        isActive ? styles["StyloUI-tab-active"] : ""
      } ${className ?? ""}`}
      onClick={onClick}
    >
      <Text>{label}</Text>
    </div>
  );
};

export default Tab;
