import React from "react";
import ProductDetail from "../components/ProductDetail";
import styled from "styled-components";

const Container = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
`;
const ProductPage = ({ priceKR, cart, setCart }) => {
  return (
    <Container>
      <ProductDetail priceKR={priceKR} cart={cart} setCart={setCart} />
    </Container>
  );
};

export default ProductPage;
