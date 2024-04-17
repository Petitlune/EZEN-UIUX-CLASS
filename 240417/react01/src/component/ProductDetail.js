import React from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetail = () => {
  const { device, category, productNum } = useParams();

  return (
    <div>
      <div>🎁ProductDetail🎁</div>
      <div>상품 매체: {device}</div>
      <div>상품 카테고리: {category}</div>
      <div>상품 품번: {productNum}</div>
      <Link to="/product">◀◀◀ Go To product page</Link>
    </div>
  );
};

export default ProductDetail;
