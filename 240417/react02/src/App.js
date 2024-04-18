import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Component/NavBar";
import Login from "./Component/Login";
import PrivateRoute from "./Component/PrivateRoute";
import ProductAll from "./Component/ProductAll";
// import ProductDetail from "./Component/ProductDetail";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log(authenticate);
  }, [authenticate]);
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
          path="/products/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
