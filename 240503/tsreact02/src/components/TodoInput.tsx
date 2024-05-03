import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "./TextInput";
import Button from "./Button";
import Title from "./Title";

const Input = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
`;
const Content = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 18px;
  padding: 32px;
  z-index: 1;
`;
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
`;

interface Props {
  onAdd: (todo: string) => void;
}

const TodoInput = ({ onAdd }: Props) => {
  const [todo, setTodo] = useState("");
  const onAddTodo = () => {
    if (todo === "") return;
    onAdd(todo);
    setTodo("");
  };

  return (
    <Input>
      <Background />
      <Content>
        <Title label="할일 추가" />
        <InputContainer>
          <TextInput value={todo} onChange={setTodo} />
          <Button label="추가" color="#304ff2" onClick={onAddTodo} />
        </InputContainer>
      </Content>
    </Input>
  );
};

export default TodoInput;
