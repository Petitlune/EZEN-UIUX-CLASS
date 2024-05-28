import React from "react";
import ReactDOM from "react-dom/client";

import App10 from "./App10";
import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
font-family: "Roboto";
background: linear-gradient(135deg, #0260ee, #9abaeb);
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }

`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <GlobalStyled />
    <App10 />
  </>
);
