import React, { JSX } from "react";
import Text from "../texts/Text";
import styles from "./Stepper.module.css";

export type StepsType = {
  label: string;
  description: string;
  icon?: JSX.Element;
};

export interface StepperProps {
  steps: StepsType[];
  currentStep: number;
  direction?: "horizontal" | "vertical"; // Nueva propiedad direction
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  direction = "horizontal", // Por defecto es horizontal
}) => {
  return (
    <div className={styles["StyloUI-steps-container"]}>
      <div
        className={`${styles["StyloUI-steps"]} ${
          direction === "vertical" ? styles["vertical"] : ""
        }`}
      >
        {steps.map((step, index) => (
          <div key={index} className={styles["StyloUI-step"]}>
            {/* Círculo con icono */}
            <div
              className={`${styles["StyloUI-step-circle"]} ${
                index < currentStep ? styles["completed"] : ""
              } ${index === currentStep ? styles["active"] : ""}`}
            >
              {index < currentStep ? "✔" : step.icon}
            </div>

            {/* Contenido del paso */}
            <div>
              <Text
                className={`${styles["StyloUI-step-title"]} ${
                  index === currentStep ? styles["active"] : ""
                }`}
              >
                {step.label}
              </Text>
              <Text
                className={`${styles["StyloUI-step-description"]} ${
                  index === currentStep ? styles["active"] : ""
                }`}
              >
                {step.description}
              </Text>
            </div>

            {/* Línea de conexión entre pasos */}
            {index < steps.length - 1 && (
              <div
                className={styles["StyloUI-step-line"]}
                style={{
                  background:
                    index < currentStep
                      ? "#58AC25"
                      : index === currentStep
                      ? "#0082C8"
                      : "#8A9099",
                }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
