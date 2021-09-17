import React, { useState } from "react";
import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, purpleTheme, GlobalStyles } from "./themes.js";

const StyledApp = styled.div`
  text-align: center;
  color: ${(props) => props.theme.fontColor};
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("purple");
    }
  };
  return (
    <ThemeProvider
      theme={
        theme === "light"
          ? lightTheme
          : theme === "dark"
          ? darkTheme
          : purpleTheme
      }
    >
      <GlobalStyles />
      <StyledApp>
        Hey there!
        <button onClick={() => themeToggler()}>Switch Theme</button>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
