import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  justify-content: space-between;
  margin-bottom: 36px;
  div:first-child {
    width: 100%;
    height: 280px;
    border: 2px solid #eee;
    padding: 8px;
    border-radius: 5px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 16px 0 0 8px;
  span:nth-child(1) {
    font-size: 14px;
    color: #555;
  }
  span:nth-child(2) {
    font-weight: 600;
    color: #222;
  }
`;

const Products = ({ product, priceKR }) => {
  return (
    <Container>
      <Link to={`product/${product.id}`}>
        <div>
          <img src={product.image} alt="product" />
        </div>
      </Link>
      <Items>
        <span>{product.provider}</span>
        <span>{product.name}</span>
        <span>{priceKR(product.price)}원</span>
      </Items>
    </Container>
  );
};

export default Products;
