import Table from "./Table";

const columns: ColumnTable[] = [
  { header: "Nombre", accessor: "name", align: "left" },
  { header: "Edad", accessor: "age", align: "center" },
  { header: "Ciudad", accessor: "city", align: "center" },
];

const rows = [
  { key: 1, name: "Juan", age: 25, city: "Madrid" },
  { key: 2, name: "Ana", age: 30, city: "Barcelona" },
  { key: 3, name: "Luis", age: 28, city: "Valencia" },
  { key: 4, name: "Carlos", age: 35, city: "Sevilla" },
  { key: 5, name: "Sofia", age: 22, city: "Zaragoza" },
];

export default {
  title: "Components/Table",
  component: Table,
};

// Historia principal con tabla básica
export const Default = () => <Table columns={columns} rows={rows} />;

export const WithCustomAlignment = () => {
  const customColumns: ColumnTable[] = [
    { header: "Nombre", accessor: "name", align: "left" },
    { header: "Edad", accessor: "age", align: "right" },
    { header: "Ciudad", accessor: "city", align: "center" },
  ];

  return <Table columns={customColumns} rows={rows} />;
};

export const WithCheckbox = () => {
  const dynamicColumns = [
    { header: "Producto", accessor: "product" },
    { header: "Precio", accessor: "price" },
  ];

  const dynamicRows = [
    { key: 1, product: "Camiseta", price: "$20" },
    { key: 2, product: "Pantalón", price: "$35" },
    { key: 3, product: "Zapatos", price: "$50" },
  ];

  return <Table columns={dynamicColumns} rows={dynamicRows} showCheckbox />;
};
