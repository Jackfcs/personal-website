import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import { useDarkMode } from "./components/UseDarkMode";
import "./App.scss";
import Main from "./components/Main";
import Menu from "./components/Menu";
import About from "./components/About";
import Skills from "./components/Skills"

//Things to return to
// scroll-snap
// responsive, add mobile detect

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <div className="App">
        <GlobalStyles />
        <Menu theme={theme} toggleTheme={toggleTheme} />

        <Main />
        <About />
        <Skills />

      </div>
    </ThemeProvider>
  );
}

export default App;
