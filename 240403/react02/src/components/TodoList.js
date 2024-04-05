import "./TodoList.css";
import TodoItem from "./TodoItem";
import { useState, useMemo, useContext } from "react";
import { TodoStateContext } from "../App";

const TodoList = () => {
  const { todo } = useContext(TodoStateContext);

  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearchResult = () => {
    return search === ""
      ? todo
      : todo.filter(
          (it) => it.content.toLowerCase().includes(search.toLowerCase())
          //toLowerCase사용해서 content 와 search 안에 모든 글자 소문자로 바꾸어주었다.
        );
  };
  //리액트의 최적화를 위해 useMemo함수 사용. => 불필요한 함수 재호출 방지
  const analyzeTodo = useMemo(() => {
    const totalCount = todo.length;
    const doneCount = todo.filter((it) => it.isDone).length;
    const notDoneCount = totalCount - doneCount;
    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todo]);

  const { totalCount, doneCount, notDoneCount } = analyzeTodo;

  return (
    <div className="TodoList">
      <h4>TodoList ⏳</h4>
      <div>
        <div>총 개수: {totalCount}</div>
        <div>완료 된 할 일 : {doneCount}</div>
        <div>아직 완료하지 못한 할 일 : {notDoneCount}</div>
      </div>
      <input
        value={search}
        className="searchbar"
        placeholder="검색어를 입력하세요."
        onChange={onChangeSearch}
      />
      <div className="list_wrapper">
        {getSearchResult().map((item) => (
          //부모요소가 자식요소에게 객체를 보내는 방법
          <TodoItem
            key={item.id}
            {...item}
            // onUpdate={onUpdate}
            // onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

// TodoList.defaultProps = {
//   todo: [],
// };

export default TodoList;
