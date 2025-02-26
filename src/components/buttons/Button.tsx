import React from "react";

// Exporta explícitamente el tipo ButtonProps
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 bg-primary text-white rounded co
        h-[56px] p-8 border
        
        ${className || ""}`}
      {...props}
    >
      {children}
    </button>
  );
};
