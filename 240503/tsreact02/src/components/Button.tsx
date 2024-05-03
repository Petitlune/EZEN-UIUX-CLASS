import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background: ${(props) => props.color};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: ${(props) => props.color};
    opacity: 0.8;
  }
  &:active {
    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.2);
  }
`;
interface Props {
  label: string;
  onClick?: () => void;
  color?: string;
}

const Button = ({ label, onClick, color = "#ff5722" }: Props) => {
  return (
    <Btn color={color} onClick={onClick}>
      {label}
    </Btn>
  );
};

export default Button;
