import Select from "../Select";

export default {
  title: "Components/Select",
  component: Select,
};

export const Default = () => {
  const options: optionsSelect[] = [
    {
      label: "Opción 1",
      value: "1",
    },
    {
      label: "Opción 2",
      value: "2",
    },
    {
      label: "Opción 3",
      value: "3",
    },
  ];

  return <Select label="Opciones" options={options} />;
};
export const Clearable = () => {
  const options: optionsSelect[] = [
    {
      label: "Opción 1",
      value: "1",
    },
    {
      label: "Opción 2",
      value: "2",
    },
    {
      label: "Opción 3",
      value: "3",
    },
  ];

  return (
    <Select label="Opciones" options={options} defaultValue="1" showClear />
  );
};
export const WithDynamicLabel = () => {
  const options: optionsSelect[] = [
    {
      label: (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <strong style={{ color: "red" }}>Opción A</strong>
          <p>Descripción de la opción A</p>
        </div>
      ),
      value: "A",
    },
    {
      label: (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <strong style={{ color: "blue" }}>Opción B</strong>
          <p>Descripción de la opción B</p>
        </div>
      ),
      value: "B",
    },
    {
      label: (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <strong style={{ color: "green" }}>Opción C</strong>
          <p>Descripción de la opción C</p>
        </div>
      ),
      value: "C",
    },
  ];

  return <Select label="Opciones" defaultValue={"A"} options={options} />;
};
