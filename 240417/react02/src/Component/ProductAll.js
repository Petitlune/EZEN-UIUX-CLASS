import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { Container, Row, Col } from "react-bootstrap";

const ProductAll = () => {
  const [productList, setProdcutList] = useState([]);
  const getProducts = async () => {
    const url = "http://localhost:3004/products";
    const response = await fetch(url);
    const data = await response.json();
    setProdcutList(data);
  };
  useEffect(() => {
    getProducts(); //json 데이터 찾아오는 역할
  }, []);
  return (
    <Container>
      <Row>
        {productList.map((item) => (
          <Col la={3}>
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
