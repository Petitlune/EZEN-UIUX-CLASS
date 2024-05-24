import React from "react";
import styled from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { toDoState } from "./atoms";
import Boards from "./components/Boards";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  max-width: 680px;
  margin: 0 auto;
`;

const Board = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
`;

const App = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  // const onDragEnd = ({ source, destination, draggableId }: DropResult) => {
  //   if (!destination) return;
  //   // setToDos((oldToDos) => {
  //   //   const copyToDos = [...oldToDos];
  //   //   copyToDos.splice(source.index, 1);
  //   //   copyToDos.splice(destination.index, 0, draggableId);
  //   //   return copyToDos;
  //   // });
  // };
  const onDragEnd = (info: DropResult) => {
    const { source, destination, draggableId } = info;
    //각 보드 내에 이동되게 만드는 코드
    if (destination?.droppableId === source.droppableId) {
      setToDos((oldToDos) => {
        const boardCopy = [...oldToDos[source.droppableId]];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination.index, 0, draggableId);
        return {
          ...oldToDos,
          [source.droppableId]: boardCopy,
        };
      });
    }
    //각 보드간 이동되게 만드는 코드
    //타입가드로 droppableId가 발생되었을 때의 범위를 주고 안에 이 조건문을 넣어준다.
    if (destination?.droppableId !== source.droppableId) {
      if (!destination) return;
      setToDos((oldToDos) => {
        const sourceBoard = [...oldToDos[source.droppableId]];
        const destinationBoard = [...oldToDos[destination?.droppableId]];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination?.index, 0, draggableId);
        return {
          ...oldToDos,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Board>
          {Object.keys(toDos).map((boardId) => (
            <Boards toDos={toDos[boardId]} boardId={boardId} key={boardId} />
          ))}
        </Board>
      </Wrapper>
    </DragDropContext>
  );
};

export default App;
