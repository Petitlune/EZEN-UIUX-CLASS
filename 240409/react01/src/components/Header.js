import React from "react";
import "./Header.css";
const Header = ({ title, leftChild, rightChild }) => {
  return (
    <div className="Header">
      <div className="header_left">{leftChild}</div>
      <div className="header_title">{title}</div>
      <div className="header_right">{rightChild}</div>

      {/* <Button
        onClick={() => {
          alert("Default Button");
        }}
        text={"기본"}
      />
      <Button
        onClick={() => {
          alert("Positive Button");
        }}
        type="Positive"
        text={"긍정"}
      />
      <Button
        onClick={() => {
          alert("Negative Button");
        }}
        type="Negative"
        text={"부정"}
      /> */}
    </div>
  );
};

export default Header;
