import { Progress, ProgressProps } from "./Progress";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Progress",
  component: Progress,
  argTypes: {
    leftColor: {
      control: "color",
      description: "Color de la parte izquierda del progreso",
    },
    rightColor: {
      control: "color",
      description: "Color de la parte derecha del progreso",
    },
    timingFunction: {
      control: {
        type: "select",
        options: ["ease", "ease-in", "ease-out", "linear", "ease-in-out"],
      },
      description: "Tipo de función de animación",
    },
    direction: {
      control: {
        type: "select",
        options: ["normal", "reverse", "alternate", "alternate-reverse"],
      },
      description: "Dirección de la animación",
    },
  },
} as Meta<typeof Progress>;

const Template: StoryFn<ProgressProps> = (args) => <Progress {...args} />;

export const Default = Template.bind({});
Default.args = {
  timingFunction: "ease-in-out",
  direction: "normal",
};

export const AlternateReverse = Template.bind({});
AlternateReverse.args = {
  leftColor: "#28a745",
  rightColor: "#17a2b8",
  timingFunction: "ease-out",
  direction: "alternate-reverse",
};

export const Linear = Template.bind({});
Linear.args = {
  leftColor: "#ff6347",
  rightColor: "#ff4500",
  timingFunction: "linear",
  direction: "normal",
};
