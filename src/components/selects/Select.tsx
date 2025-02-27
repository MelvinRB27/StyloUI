import { useState, useEffect, useRef, JSX } from "react";
import { FaRegTimesCircle } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from "./Select.module.css";

export interface Option {
  label: string | JSX.Element;
  value: string;
}

export interface SelectProps {
  label: string;
  placeholder?: string;
  value?: string | number;
  defaultValue?: string | number;
  options: Option[];
  className?: string;
  showClear?: boolean;
  onChange?: (value: string | number | null) => void;
}

export const Select = ({
  label,
  placeholder = "Selecciona una opción",
  value,
  defaultValue,
  options,
  showClear = false,
  onChange,
}: SelectProps) => {
  const selectRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<
    string | number | undefined
  >(value ?? defaultValue);

  const selectedOption =
    options.find((opt) => opt.value === selectedValue) || null;

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleSelect = (option: Option) => {
    setSelectedValue(option.value);
    setIsOpen(false);
    onChange?.(option.value);
  };
  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedValue(undefined);
    onChange?.(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className={styles["StyloUI-SelectContainer"]} ref={selectRef}>
      {label && <span className={styles["StyloUI-SelectLabel"]}>{label}</span>}
      <div className={styles["StyloUI-CustomSelect"]}>
        <div
          className={styles["StyloUI-CustomSelectToggle"]}
          onClick={handleToggle}
        >
          <div className={styles["StyloUI-SelectedOption"]}>
            {selectedOption ? selectedOption.label : placeholder}
          </div>
          <div className={styles["StyloUI-Icons"]}>
            {showClear && selectedOption && (
              <FaRegTimesCircle
                className={styles["StyloUI-ClearButton"]}
                onClick={handleClear}
              />
            )}
            {(!showClear || (showClear && !selectedOption)) && (
              <div
                className={styles["StyloUI-ClearButton"]}
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </div>
            )}
          </div>
        </div>
        {isOpen && (
          <div className={styles["StyloUI-CustomSelectMenu"]}>
            {options.map((option) => (
              <div
                key={option.value}
                className={styles["StyloUI-CustomSelectOption"]}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
