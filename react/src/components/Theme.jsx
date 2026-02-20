import { createContext,useState,useEffect } from "react";

export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
    const [Theme, setCurrentTheme] = useState('light');
    const toggleTheme = () => {
        setCurrentTheme(Theme === 'light' ? 'dark' : 'light');
    };

  return (
    <ThemeContext.Provider value={{ Theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
    
  );
};