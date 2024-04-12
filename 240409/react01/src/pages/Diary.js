import React from "react";
import useDiary from "../hooks/useDiary";
//useParams : 상단 주소창에서 파라미터의 값을 찾아올 때 사용하는 리액트 훅
import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();
  const data = useDiary(id);
  console.log(data);

  return (
    <div>
      <div>{id}번 일기</div>
    </div>
  );
};

export default Diary;
