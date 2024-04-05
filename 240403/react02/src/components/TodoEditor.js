import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";
import "./TodoEditor.css";

const TodoEditor = () => {
  const { onCreate } = useContext(TodoDispatchContext);

  const [content, setContent] = useState("");
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const inputRef = useRef();

  const onSubmit = () => {
    if (!content) {
      inputRef.current.focus();
      return;
    } else {
      onCreate(content);
      // 이경우에서는 inputRef.current.value = "" 쓸 수 없음. 만약 onCreate안에 넣어줄 수 있다면 사용가능하다 .하지만 지금의 경우에는 넣어줄 수 없기 때문에 setContent함수를 이용해서만 리셋이 가능하다.
      setContent(""); // input 리셋 시키는 함수.
    }
  };

  //엔터 눌렀을때도 제출되게 하는 함수정의
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };
  return (
    <div className="TodoEditor">
      <h4>새로운 Todo 작성하기📝</h4>
      <div className="editor_wraper">
        <input
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown} //엔터 눌렸을때도 input 값 추가
          placeholder="새로운 Todo..."
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;
