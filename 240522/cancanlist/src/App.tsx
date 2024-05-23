import React from "react";
import styled from "styled-components";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { toDoState } from "./atoms";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  /* border: 1px solid #fff; */
`;
const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`;
const Board = styled.div`
  min-height: 200px;
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.boardColor};
`;
const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  color: #000;
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 5px;
`;

const App = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ source, destination }: DropResult) => {
    console.log({ source, destination });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(magic) => (
              <Board ref={magic.innerRef} {...magic.droppableProps}>
                {toDos.map((toDo, index) => (
                  <Draggable draggableId={toDo} key={index} index={index}>
                    {(magic) => (
                      <Card
                        ref={magic.innerRef}
                        {...magic.draggableProps}
                        {...magic.dragHandleProps}
                      >
                        {toDo}
                      </Card>
                    )}
                  </Draggable>
                ))}
              </Board>
            )}
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
};

export default App;
