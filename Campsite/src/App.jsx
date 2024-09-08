import Container from "./components/container";
import Header from "./components/header";
import "./App.css";
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme((curr) => (curr == 'dark' ? 'light' : 'dark' ))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div id={theme}>
        <Header handleTheme={toggleTheme} theme={theme} />
        <Container />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
