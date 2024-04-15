import React, { useEffect } from "react";
import useDiary from "../hooks/useDiary";
//useParams : 상단 주소창에서 파라미터의 값을 찾아올 때 사용하는 리액트 훅
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import { getFormattedDate, setPageTitle } from "../util";

const Diary = () => {
  const { id } = useParams();
  const data = useDiary(id);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goEdit = () => {
    navigate(`/edit/${id}`);
  };
  useEffect(() => {
    setPageTitle(`${id}번 일기`);
  }, []);

  if (!data) {
    return <div>일기를 불러오고 있습니다.</div>;
  } else {
    const { date, emotionId, content } = data;
    const title = `${getFormattedDate(new Date(Number(date)))} 기록`;
    return (
      <div>
        <Header
          leftChild={<Button onClick={goBack} text="◀ 뒤로가기" />}
          title={title}
          rightChild={<Button onClick={goEdit} text="수정하기" />}
        />
        <Viewer content={content} emotionId={emotionId} />
      </div>
    );
  }
};

export default Diary;
