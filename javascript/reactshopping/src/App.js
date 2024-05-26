import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import BasketPage from "./pages/BasketPage";
import Head from "./components/Head";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
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
  const [products, setProducts] = useState([]);
  const [checkLists, setCheckLists] = useState([]);
  const priceKR = (price) => {
    return price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };
  const [cart, setCart] = useState([]);

  return (
    <div>
      <GlobalStyle />
      <Head cart={cart} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              products={products}
              setProducts={setProducts}
              priceKR={priceKR}
            />
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProductPage priceKR={priceKR} cart={cart} setCart={setCart} />
          }
        />
        <Route
          path="/cart"
          element={
            <BasketPage
              priceKR={priceKR}
              cart={cart}
              setCart={setCart}
              checkLists={checkLists}
              setCheckLists={setCheckLists}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
