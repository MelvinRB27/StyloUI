import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import Stepper, { StepsType } from "./Stepper";

// Datos de ejemplo para los pasos
const steps: StepsType[] = [
  { label: "Step 1", description: "Description for Step 1" },
  { label: "Step 2", description: "Description for Step 2" },
  { label: "Step 3", description: "Description for Step 3" },
  { label: "Step 4", description: "Description for Step 4" },
];

export default {
  title: "Components/Stepper",
  component: Stepper,
} as Meta<typeof Stepper>;

const Template: StoryFn = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return <Stepper steps={steps} currentStep={currentStep} />;
};

export const Default = Template.bind({});
Default.args = {
  steps: steps,
  currentStep: 0,
};
