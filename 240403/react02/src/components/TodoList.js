import "./TodoList.css";
import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList = ({ todo, onUpdate, onDelete }) => {
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

  return (
    <div className="TodoList">
      <h4>TodoList ⏳</h4>
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
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};
export default TodoList;
