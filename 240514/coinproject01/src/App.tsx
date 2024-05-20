import React, { useState } from "react";
import Router from "./routes/Router";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./theme";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const ToggleBtn = styled.button`
  width: 60px;
  height: 60px;
  margin: 10px;
  border-radius: 100%;
  border: none;
  cursor: pointer;
`;

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
  body {
    font-family: "Source Sans 3";
    background-color: ${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor}; ;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    setIsDark(!isDark);
  };
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <ToggleBtn onClick={toggleDark}>Toggle Mode</ToggleBtn>
        <GlobalStyle />
        <Router isDark={isDark} toggleDark={toggleDark} />
      </ThemeProvider>
    </>
  );
}

export default App;
