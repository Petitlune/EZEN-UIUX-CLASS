import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Component/NavBar";
import Login from "./Component/Login";
import ProductAll from "./Component/ProductAll";
import ProductDetail from "./Component/ProductDetail";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  return (
    <div>
      <NavBar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />}></Route>
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        ></Route>
        <Route
          path="/product/:id"
          element={<ProductDetail authenticate={authenticate} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
