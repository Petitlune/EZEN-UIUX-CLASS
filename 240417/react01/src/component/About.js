import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const gotoHome = () => {
    navigate("/");
  };
  return (
    <div className="AboutPage">
      <div>🍀About page🍀</div>
      <button onClick={gotoHome}>Go To Home page</button>
    </div>
  );
};

export default About;
