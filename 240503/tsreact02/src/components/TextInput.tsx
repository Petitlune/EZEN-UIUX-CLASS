import React from "react";
import styled from "styled-components";

//입력부
const Input = styled.input`
  font-size: 1.2rem;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #ff5722;
  &:focus {
    outline: none;
  }
`;

interface Props {
  value: string;
  onChange: (text: string) => void;
}

const TextInput = ({ value, onChange }: Props) => {
  return <Input value={value} onChange={(e) => onChange(e.target.value)} />;
};

export default TextInput;
