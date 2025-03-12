import React, { useState } from "react";
import styles from "./Table.module.css";
import Checkbox from "../checkbox/Checkbox";

export interface ColumnTable {
  header: string;
  accessor: string;
  align?: "left" | "center" | "right";
}

export interface Row {
  key: string | number;
  [row: string]: any;
}

export interface TableProps {
  columns: ColumnTable[];
  rows: Row[];
  showCheckbox?: boolean;
  onSelectionChange?: (selectedRows: Row[], selectedKeys: string[]) => void;
}

export const Table: React.FC<TableProps> = ({
  columns,
  rows,
  showCheckbox = false,
  onSelectionChange,
}) => {
  const [selectedRows, setSelectedRows] = useState<Row[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const rowsWithKeys = rows.map((row, index) => ({
    ...row,
    key: row.key || `${index}`,
  }));

  // Función que maneja la selección de filas individuales
  const handleRowSelection = (row: Row, key: string | number) => {
    let newSelectedRows = [...selectedRows];
    let newSelectedKeys = [...selectedKeys];

    const stringKey = String(key);

    if (newSelectedKeys.includes(stringKey)) {
      newSelectedRows = newSelectedRows.filter(
        (row) => String(row.key) !== stringKey
      );
      newSelectedKeys = newSelectedKeys.filter(
        (selectedKey) => selectedKey !== stringKey
      );
    } else {
      newSelectedRows.push(row);
      newSelectedKeys.push(stringKey);
    }

    setSelectedRows(newSelectedRows);
    setSelectedKeys(newSelectedKeys);

    if (onSelectionChange) {
      onSelectionChange(newSelectedRows, newSelectedKeys);
    }
  };

  // Función que maneja la selección de todas las filas
  const handleSelectAll = () => {
    let newSelectedRows: Row[] = [];
    let newSelectedKeys: string[] = [];

    if (!selectAll) {
      newSelectedRows = rowsWithKeys;
      newSelectedKeys = rowsWithKeys.map((row) => String(row.key));
    }

    setSelectedRows(newSelectedRows);
    setSelectedKeys(newSelectedKeys);
    setSelectAll(!selectAll);

    if (onSelectionChange) {
      onSelectionChange(newSelectedRows, newSelectedKeys);
    }
  };

  return (
    <table className={styles["StyloUI-Table"]}>
      <thead>
        <tr>
          {showCheckbox && (
            <th style={{ textAlign: "center", borderBottom: "1px solid #ddd" }}>
              <Checkbox checked={selectAll} onChange={handleSelectAll} />
            </th>
          )}
          {columns.map((column, index) => (
            <th
              key={index}
              style={{
                textAlign: column.align || "left",
                borderBottom: "1px solid #ddd",
                padding: "8px",
              }}
            >
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rowsWithKeys.map((row) => (
          <tr key={row.key}>
            {showCheckbox && (
              <td
                style={{
                  textAlign: "center",
                  padding: "8px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                <Checkbox
                  label=""
                  checked={selectedKeys.includes(String(row.key))}
                  onChange={() => handleRowSelection(row, row.key)}
                />
              </td>
            )}
            {columns.map((column, colIndex) => (
              <td
                key={colIndex}
                style={{
                  textAlign: column.align || "left",
                  padding: "8px",
                  borderBottom: "1px solid #ddd",
                }}
              >
                {/* Conversión explícita para acceder a la propiedad dinámica */}
                {row[column.accessor as keyof typeof row]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
