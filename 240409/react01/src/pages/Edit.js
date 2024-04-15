import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import useDiary from "../hooks/useDiary";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { DiaryDispatchContext } from "../App";
import { setPageTitle } from "../util";

const Edit = () => {
  const { id } = useParams();
  const data = useDiary(id);
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const { onUpdate, onDelete } = useContext(DiaryDispatchContext);
  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않습니다. ")) {
      onDelete(id);
      navigate("/");
    }
  };
  const onSubmit = (data) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      const { date, emotionId, content } = data;
      onUpdate(id, date, emotionId, content);
      navigate("/");
    }
  };
  useEffect(() => {
    setPageTitle(`${id}번 일기 수정하기`);
  }, []);
  if (!data) {
    return <div>일기를 불러오고 있습니다...</div>;
  } else {
    return (
      <div>
        <Header
          leftChild={<Button onClick={goBack} text=" ◀ 뒤로가기" />}
          title="일기 수정하기"
          rightChild={
            <Button onClick={onClickDelete} text="삭제하기" type="Negative" />
          }
        />
        <Editor initData={data} onSubmit={onSubmit} />
      </div>
    );
  }
};

export default Edit;
