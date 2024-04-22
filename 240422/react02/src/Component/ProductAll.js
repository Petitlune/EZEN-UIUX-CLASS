import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Container, Row, Col } from "react-bootstrap";

const ProductAll = () => {
  const [productList, setProdcutList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const searchQuery = query.get("q") || "";
  console.log(searchQuery);
  const getProducts = async () => {
    const url = `https://my-json-server.typicode.com/Petitlune/Shopping-Website/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    setProdcutList(data);
  };
  useEffect(() => {
    getProducts(); //json 데이터 찾아오는 역할
  }, [query]);
  return (
    <Container>
      <Row>
        {productList.map((item, idx) => (
          <Col key={idx} la={3}>
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
