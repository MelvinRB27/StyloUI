import { PasswordInput, PasswordInputProps } from "../PasswordInput";
import { CiLock } from "react-icons/ci";

export default {
  title: "Components/inputs/PasswordInput",
  component: PasswordInput,
  argTypes: {
    startIcon: {
      control: {
        type: "element", // Para permitir un control de tipo "icono"
      },
      description: "Icono que aparece al inicio del campo de entrada.",
    },
  },
};

export const Default = () => <PasswordInput />;

Default.story = {
  name: "Default",
  parameters: {
    docs: {
      description: {
        story:
          "Este es el `PasswordInput` básico sin iconos, simplemente un campo de contraseña.",
      },
    },
  },
};

export const WithStartIcon = (args: PasswordInputProps) => (
  <PasswordInput {...args} />
);

WithStartIcon.args = {
  startIcon: <CiLock />,
};

WithStartIcon.story = {
  name: "Con Icono de Inicio",
  parameters: {
    docs: {
      description: {
        story:
          "Este `PasswordInput` incluye un icono al inicio del campo de entrada, en este caso un candado.",
      },
    },
  },
};
