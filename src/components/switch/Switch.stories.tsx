import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa6";
import Switch from "./Switch";

export default {
  title: "Components/Switch",
  component: Switch,
};

export const Default = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Switch checked={checked} onChange={(checked) => setChecked(checked)} />
  );
};
export const WithLabel = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      checked={checked}
      onChange={(checked) => setChecked(checked)}
      label="Active"
    />
  );
};

export const WithInactiveInactiveIcon = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      checked={checked}
      onChange={(checked) => setChecked(checked)}
      activeIcon={<FaRegSun />}
      inactiveIcon={<FaMoon />}
    />
  );
};
