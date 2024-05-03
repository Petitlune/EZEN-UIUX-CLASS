import React, { useState } from "react";
import styled from "styled-components";
import "./App.css";
import DataView from "./components/DataView";
import TodoInput from "./components/TodoInput";
import Button from "./components/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;

const ShowInputButton = styled.div`
  position: absolute;
  z-index: 1;
  right: 40px;
  bottom: 40px;
`;

function App() {
  const [toDo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([
    "React 공부하기",
    "인생 공부하기",
    "운동하기",
  ]);

  const [showTodoInput, setShowTodoInput] = useState(true);

  const onAdd = (todo: string) => {
    if (todo === "") return;
    setTodoList([...todoList, toDo]);
    setTodo("");
    setShowTodoInput(false);
  };

  const onDelete = (todo: string) => {
    //filter는 배열의 메서드 가운데서 몇 안되는 순수함수(원본 데이터 해치지 않고 새로운 배열의 함수 만들어낸다)
    setTodoList(todoList.filter((item) => item !== todo));
  };
  return (
    <Container>
      <DataView todoList={todoList} onDelete={onDelete} />
      {showTodoInput && <TodoInput onAdd={onAdd} />}
      <ShowInputButton>
        <Button
          label={showTodoInput ? "닫기" : "할 일 추가"}
          color={showTodoInput ? undefined : "#304ffe"}
          onClick={() => {
            setShowTodoInput(!showTodoInput);
          }}
        />
      </ShowInputButton>
    </Container>
  );
}

export default App;
