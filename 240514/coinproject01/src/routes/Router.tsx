import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./Coin";
import Coins from "./Coins";

interface IRouterProps {
  isDark: boolean;
  toggleDark: () => void; //반환값이 없는 함수는 무조건 void 형식
}

const Router = ({ isDark, toggleDark }: IRouterProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins toggleDark={toggleDark} />} />
        <Route path="/:coinId/*" element={<Coin isDark={isDark} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
