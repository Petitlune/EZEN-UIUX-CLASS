import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getFormattedDate, emotionList } from "../util";
import Button from "./Button";
import "./Editor.css";
import EmotionItem from "./EmotionItem";

const Editor = ({ initData, onSubmit }) => {
  const navigate = useNavigate();
  const handleOnGoback = () => {
    navigate(-1);
  };

  const [state, setState] = useState({
    //처음 화면이 오늘날짜가 되게 셋팅
    date: getFormattedDate(new Date()),
    emotionId: 3,
    content: "",
  });
  useEffect(() => {
    if (initData) {
      setState({
        ...initData,
        date: getFormattedDate(new Date(initData.date)),
      });
    }
  }, [initData]);

  //date 상태변화 함수
  const handleChangeDate = (e) => {
    setState({
      //변경되지 않은 값은 전개연산자로 받아온다. 밑에서는 date만 변경되었다는 뜻
      ...state,
      date: e.target.value,
    });
  };
  //Emotion 상태변화 함수
  const handleChangeEmotion = useCallback((emotionId) => {
    setState((state) => ({ ...state, emotionId }));
  }, []);
  //content 상태변화 함수
  const handleChangeContent = (e) => {
    setState({
      ...state,
      content: e.target.value,
    });
  };
  //button 상태변화 함수
  const handleSubmit = () => {
    onSubmit(state);
  };

  return (
    <div className="Editor">
      <div className="editor_section">
        <h4>오늘의 날짜</h4>
        <div className="input_wrapper">
          <input type="date" value={state.date} onChange={handleChangeDate} />
        </div>
      </div>
      <div className="editor_section">
        <h4>오늘의 감정</h4>
        <div className="input_wrapper emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.id}
              {...item}
              onClick={handleChangeEmotion}
              isSelected={state.emotionId === item.id}
            />
          ))}
        </div>
      </div>
      <div className="editor_section">
        <h4>오늘의 일기</h4>
        <div className="input_wrapper">
          <textarea
            placeholder="오늘은 어땠나요?"
            value={state.content}
            onChange={handleChangeContent}
          />
        </div>
      </div>
      <div className="editor_section bottom_section">
        <h4>
          <Button text="취소하기" type="Negative" onClick={handleOnGoback} />
          <Button text="작성완료" type="Positive" onClick={handleSubmit} />
        </h4>
      </div>
    </div>
  );
};
export default Editor;
