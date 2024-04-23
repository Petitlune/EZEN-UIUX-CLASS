import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Component/NavBar";
import Login from "./Component/Login";
import PrivateRoute from "./Component/PrivateRoute";
import ProductAll from "./Component/ProductAll";
// import ProductDetail from "./Component/ProductDetail";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  const trueok = useSelector((state) => state.auth.authenticate);
  useEffect(() => {
    setAuthenticate(trueok);
  }, [trueok]);
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
          element={<PrivateRoute authenticate={authenticate} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
