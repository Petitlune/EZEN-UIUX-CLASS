import React from "react";
import styled from "styled-components";
import Title from "./Title";
import TodoList from "./TodoList";

//출력부의 역할

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  padding: 30px 50px;
  border-radius: 16px;
`;

interface Props {
  todoList: string[];
  onDelete: (todo: string) => void;
}

const DataView = ({ todoList, onDelete }: Props) => {
  return (
    <Container>
      <Title label="할 일 목록" />
      <TodoList todoList={todoList} onDelete={onDelete} />
    </Container>
  );
};

export default DataView;
