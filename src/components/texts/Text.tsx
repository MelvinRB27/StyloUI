import React from "react";
import clsx from "clsx";
import styles from "./Text.module.css";

type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body"
  | "caption"
  | "small";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  as?: React.ElementType;
  fontWeight?: "light" | "normal" | "medium" | "semibold" | "bold";
  textAlign?: "left" | "center" | "right" | "justify";
  color?: string;
  className?: string;
  children?: React.ReactNode;
}

const variantMapping: Record<TextVariant, React.ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  body: "p",
  caption: "span",
  small: "small",
};

export const Text: React.FC<TextProps> = ({
  variant = "body",
  as,
  fontWeight = "normal",
  textAlign = "left",
  color = "inherit",
  className,
  children,
  ...props
}) => {
  const Component: React.ElementType = as || variantMapping[variant] || "p";

  return (
    <Component
      className={clsx(
        className,
        `text-${textAlign}`,
        {
          "text-2xl font-bold": variant === "h1",
          "text-xl font-semibold": variant === "h2",
          "text-lg font-medium": variant === "h3",
          "text-base": variant === "body",
          "text-sm": variant === "caption",
          "text-xs italic": variant === "small",
        },
        {
          "font-light": fontWeight === "light",
          "font-normal": fontWeight === "normal",
          "font-medium": fontWeight === "medium",
          "font-semibold": fontWeight === "semibold",
          "font-bold": fontWeight === "bold",
        }
      )}
      style={{ color }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Text;
