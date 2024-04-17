import "./App.css";

import Home from "./component/Home";
import About from "./component/About";
import Product from "./component/Product";
import ProductDetail from "./component/ProductDetail";
import LoginPage from "./component/LoginPage";
import UserPage from "./component/UserPage";
import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  const [authenticate, setAuthenticate] = useState(true);

  const PrivateRoute = () => {
    return authenticate === true ? <UserPage /> : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route
          path="/product/:device/:category/:productNum"
          element={<ProductDetail />}
        />
        <Route
          path="/login"
          element={<LoginPage PrivateRoute={PrivateRoute} />}
        />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
