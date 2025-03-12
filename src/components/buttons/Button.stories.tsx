import { Button } from "./Button";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Button",
  component: Button,
  actions: {
    handles: ["onClick"],
  },
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "danger",
          "warning",
          "info",
          "success",
          "default",
        ],
      },
      description: "Define el estilo del botón",
      defaultValue: "default",
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
      description: "Define el tamaño del botón",
      defaultValue: "medium",
    },
    disabled: {
      control: "boolean",
      description: "Desactiva el botón",
      defaultValue: false,
    },
    children: {
      control: "text",
      description: "Texto que aparece dentro del botón",
      defaultValue: "Click Me",
    },
  },
};

// export const Default = () => <Button>Click Me</Button>;

export const Primary = () => <Button variant="primary">Primary </Button>;

export const Secondary = () => <Button variant="secondary">Secondary </Button>;

export const Small = () => <Button size="small">Small </Button>;

export const Disabled = () => <Button disabled>Disabled </Button>;

export const Danger = () => <Button variant="danger">Danger </Button>;

export const Warning = () => <Button variant="warning">Warning </Button>;

export const Info = () => <Button variant="info">Info </Button>;

export const Success = () => <Button variant="success">Success </Button>;

export const Large = () => <Button size="large">Large </Button>;
