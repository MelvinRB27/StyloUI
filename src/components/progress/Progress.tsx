import styles from "./Progress.module.css";

export interface ProgressProps {
  leftColor?: string;
  rightColor?: string;
  timingFunction?: "ease" | "ease-in" | "ease-out" | "linear" | "ease-in-out";
  direction?: "normal" | "reverse" | "alternate" | "alternate-reverse";
}

export const Progress = ({
  leftColor = "var(--primary-color)",
  rightColor = "var(--primary-color)",
  timingFunction = "ease-in-out",
  direction = "normal",
}: ProgressProps) => {
  const progressStyles = {
    borderLeftColor: leftColor,
    borderRightColor: rightColor,
    animationTimingFunction: timingFunction,
    animationDirection: direction,
  };

  return (
    <div className={styles["StyloUI-progress-container"]}>
      <div className={styles["StyloUI-progress"]} style={progressStyles}></div>
    </div>
  );
};

export default Progress;
