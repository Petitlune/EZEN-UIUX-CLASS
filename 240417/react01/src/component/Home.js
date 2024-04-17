import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const gotoProduct = () => {
    navigate("/product?q=present");
  };
  return (
    <div className="HomePage">
      <div>🌼Home page🌼</div>
      <div className="linkAll">
        <Link to="/about">Go to About page</Link>
        <button onClick={gotoProduct}>Go to product page</button>
      </div>
    </div>
  );
};

export default Home;
