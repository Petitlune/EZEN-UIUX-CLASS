import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");
@font-face {
  font-family: "Mapo";
  src: url("./fonts/MapoGoldenPier.ttf");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #f8f8f8;
  font-family: "Inter";
  color: #222;
  min-height: 4420px;
}
p {
  font-family: "Mapo";
  font-weight: 600;
  color: #444;
}

`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
