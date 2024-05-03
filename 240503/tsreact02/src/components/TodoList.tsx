import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  // 배열
  todoList: string[];
  onDelete: (todo: string) => void;
}

const TodoList = ({ todoList, onDelete }: Props) => {
  return (
    <Container>
      {todoList.map((todo, idx) => (
        <TodoItem key={idx} label={todo} onDelete={() => onDelete(todo)} />
      ))}
    </Container>
  );
};

export default TodoList;
