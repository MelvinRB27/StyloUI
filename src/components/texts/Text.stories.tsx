import { Text } from "./Text";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "body", "caption", "small"],
      description: "Define el tipo de texto (h1, h2, body, etc.).",
      defaultValue: "body",
    },
    as: {
      control: false,
      description: "Define qué elemento HTML se renderiza. Si no se define, usa el de `variant`.",
    },
    fontWeight: {
      control: "select",
      options: ["light", "normal", "medium", "semibold", "bold"],
      description: "Define el grosor de la fuente.",
      defaultValue: "normal",
    },
    textAlign: {
      control: "select",
      options: ["left", "center", "right", "justify"],
      description: "Define la alineación del texto.",
      defaultValue: "left",
    },
    color: {
      control: "color",
      description: "Define el color del texto.",
      defaultValue: "inherit",
    },
    className: {
      control: "text",
      description: "Permite añadir clases CSS personalizadas.",
    },
    children: {
      control: "text",
      description: "El contenido del texto.",
    },
  },
} satisfies Meta<typeof Text>;

export const Primary: StoryObj<typeof Text> = {
  args: {
    variant: "h1",
    fontWeight: "bold",
    textAlign: "center",
    color: "#050505",
    children: "StyloUI",
  },
};
