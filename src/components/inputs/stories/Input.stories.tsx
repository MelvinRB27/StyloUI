import { Input } from "../Input";
import { FiSearch, FiUser } from "react-icons/fi";

export default {
  title: "Components/inputs/Input",
  component: Input,
};

export const Default = () => (
  <Input type="text" placeholder="Escribe algo..." />
);

export const WithStartIcon = () => (
  <Input type="text" placeholder="Buscar..." startIcon={<FiSearch />} />
);

export const WithEndIcon = () => (
  <Input type="text" placeholder="Usuario..." endIcon={<FiUser />} />
);

export const WithBothIcons = () => (
  <Input
    type="text"
    placeholder="Buscar usuario..."
    startIcon={<FiSearch />}
    endIcon={<FiUser />}
  />
);
