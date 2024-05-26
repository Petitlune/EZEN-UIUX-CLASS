import React, { useEffect } from "react";
import axios from "axios";
import Products from "./Products";
import styled from "styled-components";

const Event = styled.div`
  img {
    width: 100%;
    height: auto;
    min-height: 240px;
    object-fit: cover;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 5%;
  align-items: center;
  justify-content: flex-start;
  max-width: 75%;
  padding-left: 2.8%;
`;

const SortItems = styled.div`
  width: 75%;
  display: flex;
  justify-content: flex-end;
  margin: 24px auto;
  gap: 6px;
  span {
    font-size: 14px;
    font-weight: 500;
    color: #222;
    cursor: pointer;
    margin: 0 6px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 4px;
      right: -10px;
      border-right: 2px solid #ddd;
      width: 100%;
      height: 14px;
    }
    &:last-child::before {
      border: none;
    }
  }
`;
const Main = ({ products, setProducts, priceKR }) => {
  useEffect(() => {
    axios.get("/data/products.json").then((data) => {
      setProducts(data.data.products);
    });
  }, [setProducts]);
  const sortProduct = (e) => {
    const newProduct = [...products];
    if (e.target.className === "recent") {
      newProduct.sort((a, b) => a.id - b.id);
      setProducts(newProduct);
    } else if (e.target.className === "row") {
      newProduct.sort((a, b) => a.price - b.price);
      setProducts(newProduct);
    } else if (e.target.className === "high") {
      newProduct.sort((a, b) => b.price - a.price);
      setProducts(newProduct);
    }
  };

  return (
    <div>
      <Event>
        <img src="/images/event.jpg" alt="event" />
      </Event>
      <SortItems>
        <span onClick={(e) => sortProduct(e)} className="recent">
          최신순
        </span>
        <span onClick={(e) => sortProduct(e)} className="row">
          낮은 가격순
        </span>
        <span onClick={(e) => sortProduct(e)} className="high">
          높은 가격순
        </span>
      </SortItems>
      <Container>
        {products.map((product) => {
          return (
            <Products key={product.id} product={product} priceKR={priceKR} />
          );
        })}
      </Container>
    </div>
  );
};

export default Main;
