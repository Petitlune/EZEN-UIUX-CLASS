import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  // const [productList, setProdcutList] = useState([]);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    dispatch(productAction.getProducts(searchQuery));
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
