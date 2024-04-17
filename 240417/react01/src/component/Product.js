import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const navigate02 = useNavigate();

  const [query, setQuery] = useSearchParams();
  console.log(query.get("category"));

  const gotoHome = () => {
    navigate("/");
  };
  const gotoAbout = () => {
    navigate02("/about");
  };
  return (
    <div className="ProdcutPage">
      <div>👗Product👗</div>
      <div className="linkAll">
        <button onClick={gotoHome}>Home</button>
        <button onClick={gotoAbout}>About</button>
      </div>
    </div>
  );
};

export default Product;
