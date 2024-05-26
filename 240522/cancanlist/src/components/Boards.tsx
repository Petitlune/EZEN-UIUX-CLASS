import React from "react";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";

const Board = styled.div`
  min-height: 200px;
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.boardColor};
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2`
  text-align: center;
  color: #000;
  font-size: 18px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

interface IAreaProps {
  isDraggingFromThis: boolean;
  isDraggingOver: boolean;
}

const Area = styled.div<IAreaProps>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? "pink"
      : props.isDraggingFromThis
      ? "red"
      : "royalblue"};
  flex-grow: 1;
  padding: 10px;
  border-radius: 5px;
  min-height: 140px;
`;

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

const Boards = ({ toDos, boardId }: IBoardProps) => {
  return (
    <Board>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Area
            //isDraggingOver 도착지점
            isDraggingOver={snapshot.isDraggingOver}
            //  isDraggingFromThis는 떠난지점
            isDraggingFromThis={Boolean(snapshot.draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {toDos.map((toDo, index) => (
              <DraggableCard key={toDo} toDo={toDo} index={index} />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Board>
  );
};

export default Boards;