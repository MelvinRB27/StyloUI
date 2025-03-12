import { Meta, StoryFn } from "@storybook/react";
import Alert, { AlertProps } from "./Alert";

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    severity: {
      control: "select",
      options: ["info", "success", "warning", "danger"],
      description: "Define el tipo de alerta.",
      defaultValue: "success",
    },
    position: {
      control: "select",
      options: ["top-left", "top-right", "bottom-left", "bottom-right"],
      description: "Define la posición de la alerta.",
      defaultValue: "top-right",
    },
    title: {
      control: "text",
      description: "El título de la alerta.",
      defaultValue: "Este es un título",
    },
    description: {
      control: "text",
      description: "Una descripción opcional para la alerta.",
      defaultValue: "Este es un mensaje adicional.",
    },
    showIcon: {
      control: "boolean",
      description: "Determina si se muestra el ícono en la alerta.",
      defaultValue: true,
    },
    autoClose: {
      control: "boolean",
      description:
        "Determina si se muestra la alerta se cierra automáticamente.",
      defaultValue: true,
    },
    className: {
      control: "text",
      description: "Permite agregar clases CSS personalizadas.",
    },
  },
} as Meta<typeof Alert>;

const Template: StoryFn<typeof Alert> = (args: AlertProps) => (
  <Alert {...args} />
);

export const Info = Template.bind({});
Info.args = {
  severity: "info",
  position: "top-right",
  title: "Información",
  showIcon: true,
  autoClose: true,
};
