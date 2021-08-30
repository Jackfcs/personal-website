import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import { useDarkMode } from "./components/UseDarkMode";
import Toggle from "./components/Toggler"
import "./App.css";
import Main from "./components/Main";

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;


  if (!componentMounted) {
  return <div />
};

  return (
    <ThemeProvider theme={themeMode}>
      <div className="App">
      <GlobalStyles />
      
      <Toggle  theme={theme} toggleTheme={toggleTheme} />
      <h3>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h3>
        <Main />
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          consectetur eu turpis a blandit. Integer sed mi libero. Nulla vel
          tellus quis libero ultricies eleifend. Donec lectus neque, auctor ac
          porta eu, scelerisque et tortor. Curabitur non sem id augue posuere
          tristique. Nulla et enim nisi. In consectetur faucibus dui sed
          aliquam. Nunc iaculis eget magna vel euismod. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Aenean ex augue, elementum tempus finibus non, maximus ac
          dolor. Nullam bibendum facilisis pharetra. Quisque ac mollis nisi, non
          rutrum lorem. Aenean congue ut orci id hendrerit.{" "}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
