import React, { useState } from "react";
import Radio from "./Radio";

export default {
  title: "Components/Radio",
  component: Radio,
};

export const Default = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Radio
      label="Default"
      checked={checked}
      onCheckedChange={(checked) => setChecked(checked)}
    />
  );
};
export const LabelLeft = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Radio
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
    <Radio
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
    <Radio
      label="Bottom"
      labelAlign="bottom"
      checked={checked}
      onCheckedChange={(checked) => setChecked(checked)}
    />
  );
};
