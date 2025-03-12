import React, { Children, cloneElement, ReactElement } from "react";
import styles from "./Tabs.module.css";
import Tab, { TabProps } from "./Tab";

export interface TabsProps {
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
}

export const Tabs = ({ value, onChange, children }: TabsProps) => {
  return (
    <div className={styles["StyloUI-tabs-container"]}>
      {Children.map(children, (child) => {
        if (React.isValidElement<TabProps>(child) && child.type === Tab) {
          return cloneElement(child as ReactElement<TabProps>, {
            isActive: child.props.value === value,
            onClick: () => onChange(child.props.value),
          });
        }
        return child;
      })}
    </div>
  );
};

export default Tabs;
