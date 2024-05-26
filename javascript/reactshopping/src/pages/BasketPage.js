import React from "react";
import Cart from "../components/Cart";

const BasketPage = ({ priceKR, cart, setCart, checkLists, setCheckLists }) => {
  return (
    <Cart
      priceKR={priceKR}
      cart={cart}
      setCart={setCart}
      checkLists={checkLists}
      setCheckLists={setCheckLists}
    />
  );
};

export default BasketPage;
