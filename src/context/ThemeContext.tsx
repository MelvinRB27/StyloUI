import React, { createContext, useContext, ReactNode, useEffect } from "react";

interface Theme {
  primaryColor: string;
  secondaryColor: string;
  textColor: string;
  backgroundColor: string;
  borderColor: string;
  linkColor: string;
  alertInfoColor: string;
  alertSuccessColor: string;
  alertWarningColor: string;
  alertDangerColor: string;
}

interface ThemeContextType {
  theme: Theme;
  setTheme: (newTheme: Partial<Theme>) => void;
}

const defaultTheme: Theme = {
  primaryColor: "#7067cf",
  secondaryColor: "#b7c0ee",
  textColor: "#330c2f",
  backgroundColor: "#f8f9fa",
  borderColor: "#ddd",
  linkColor: "#006eff",
  alertInfoColor: "#17a2b8",
  alertSuccessColor: "#28a745",
  alertWarningColor: "#ffc107",
  alertDangerColor: "#dc3545",
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);

  // Aplicar el tema a las variables CSS
  useEffect(() => {
    Object.keys(theme).forEach((key) => {
      document.documentElement.style.setProperty(
        `--${key}`,
        theme[key as keyof Theme]
      );
    });
  }, [theme]);

  const updateTheme = (newTheme: Partial<Theme>) => {
    setTheme((prevTheme) => ({
      ...prevTheme,
      ...newTheme,
    }));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
