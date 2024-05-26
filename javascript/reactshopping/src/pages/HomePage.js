import React from "react";
import Main from "../components/Main";

const HomePage = ({ products, setProducts, priceKR }) => {
  return (
    <Main products={products} setProducts={setProducts} priceKR={priceKR}>
      Home
    </Main>
  );
};

export default HomePage;
