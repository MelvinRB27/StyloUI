import React, { useEffect, useState } from "react";
import {
  AiOutlineExclamationCircle,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { FiAlertTriangle } from "react-icons/fi";
import { LuCircleCheckBig } from "react-icons/lu";
import Text from "../texts/Text";
import styles from "./Alert.module.css";
import { CiCircleRemove } from "react-icons/ci";

type severity = "info" | "success" | "warning" | "danger";

export interface AlertProps {
  severity?: severity;
  title: string;
  showIcon?: boolean;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
  autoClose?: boolean;
  duration?: number;
}

const Alert = ({
  title,
  severity = "success",
  showIcon = true,
  position = "top-right",
  className,
  autoClose = true,
  duration = 3000,
}: AlertProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const getIcon = (severity: severity) => {
    const iconMapping: Record<severity, React.ReactNode> = {
      info: <AiOutlineInfoCircle />,
      success: <LuCircleCheckBig />,
      warning: <AiOutlineExclamationCircle />,
      danger: <FiAlertTriangle />,
    };
    return iconMapping[severity];
  };

  const alertStyles = {
    info: {
      background: "rgba(23, 162, 184, 0.2)",
      color: "#17a2b8",
    },
    success: {
      background: "rgba(40, 167, 69, 0.2)",
      color: "#28a745",
    },
    warning: {
      background: "rgba(255, 193, 7, 0.2)",
      color: "#ffc107",
    },
    danger: {
      background: "rgba(220, 53, 69, 0.2)",
      color: "#dc3545",
    },
  };

  // Cerrar la alerta manualmente
  const closeAlert = () => {
    setIsVisible(false);
  };

  // Cerrar automáticamente después del tiempo especificado
  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [autoClose, duration]);

  return (
    <div
      className={`${styles["StyloUI-alert-container"]} ${
        styles[position]
      } ${className} ${!isVisible ? styles.hidden : ""}`}
      style={alertStyles[severity]}
    >
      {!autoClose && (
        <div className={styles["StyloUI-alert-iconClose"]} onClick={closeAlert}>
          <CiCircleRemove />
        </div>
      )}

      {showIcon && getIcon(severity)}
      <div className={styles["StyloUI-alert-container-info"]}>
        <Text className={styles["StyloUI-alert-title"]} variant="h6">
          {title}
        </Text>
      </div>
    </div>
  );
};

export default Alert;
