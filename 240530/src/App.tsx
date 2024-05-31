import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Ishome from "./router/Ishome";
import IsTv from "./router/IsTv";
import IsSearch from "./router/IsSearch";
import Header from "./components/Header";

function App() {
  //path="/*" 는 전체선택자라서 / 뒤에 값이 바뀌어도 홈에서 변경되지 않는다. 모달창 만들기 위해 사용됨!
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<Ishome />} />
        <Route path="/movies/:movieId" element={<Ishome />} />
        <Route path="/tv" element={<IsTv />} />
        <Route path="/search" element={<IsSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
