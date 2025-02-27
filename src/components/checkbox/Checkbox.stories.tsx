import React, { useState } from "react";
import Checkbox from "./Checkbox";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
};

export const Default = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      label="Default"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};
export const LabelLeft = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      label="Left"
      labelAlign="left"
      checked={checked}
      onCheckedChange={(checked) => setChecked(checked)}
    />
  );
};
export const LabelTop = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      label="Top"
      labelAlign="top"
      checked={checked}
      onCheckedChange={(checked) => setChecked(checked)}
    />
  );
};
export const LabelBottom = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      label="Bottom"
      labelAlign="bottom"
      checked={checked}
      onCheckedChange={(checked) => setChecked(checked)}
    />
  );
};
