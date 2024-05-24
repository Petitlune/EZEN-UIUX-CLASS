import React, { memo } from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  color: #000;
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 5px;
`;

interface IDraggableCardProps {
  toDo: string;
  index: number;
}

const DraggableCard = ({ toDo, index }: IDraggableCardProps) => {
  console.log(toDo, "has been rendered");
  return (
    <Draggable draggableId={toDo} key={toDo} index={index}>
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
  );
};
//불필요한 렌더링 없애주기 위해 memo 사용.
export default React.memo(DraggableCard);
