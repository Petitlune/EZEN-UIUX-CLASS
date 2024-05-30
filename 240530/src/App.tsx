import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Ishome from "./router/Ishome";
import IsTv from "./router/IsTv";
import IsSearch from "./router/IsSearch";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Ishome />} />
        <Route path="/tv" element={<IsTv />} />
        <Route path="/search" element={<IsSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
