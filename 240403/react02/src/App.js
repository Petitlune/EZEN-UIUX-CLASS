import "./App.css";
//input 안에 값이 변경하니까 결국 state가 변하는 것이기 때문에 useState를 사용해야함.
import { useState } from "react";
import { useRef } from "react";
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

// Data를 어떻게 저장/관리할 것인가?  =>  1. 어떤 데이터를 수집할 것인가 (id, boolean, todotext, tododate) 2. Mockup Data를 임시로 생성해놓고 작업(App.js에 만들어야함. ) 3. 어떤 방식으로 위에서 수집한 Data 보관 : 변수명 선언 && 변수값 할당 참조타입중 객체유형 타입 자료 1차 저장! 배열(이터러블 객체에서 순회가능한 데이터 형태) 안에서 filter함수 사용해야함.

//React.js와 같은 프론트엔드 라이브러리 혹은 프레임워크를 사용해서 Data를 관리하게되면 항상 다음과 같은 프로세스 과정을 기억하고 실행 준비

//mockup data(임시 데이터)
const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "React.js 공부하기",
    creatDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Node.js 공부하기",
    creatDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "정보처리기사 자격증 따기",
    creatDate: new Date().getTime(),
  },
];

function App() {
  const [todo, setTodo] = useState(mockTodo); //todo가 mockTodo의 형식을 갖고있게 배열로 만들어줌.
  const idRef = useRef(mockTodo.length);

  //Create 과정
  const onCreate = (content) => {
    const newItem = {
      //useRef사용
      id: idRef.current,
      isDone: false,
      content: content,
      creatDate: new Date().getTime(),
    };
    //전개연산자로 기존값,기존배열 그대로 가져온다 => ...todo
    setTodo([newItem, ...todo]);
    idRef.current += 1;
  };
  //checkbox 체크 여부에 따른 업데이트
  const onUpdate = (targetId) => {
    setTodo(
      todo.map((it) =>
        it.id === targetId ? { ...it, isDone: !it.isDone } : it
      )
    );
  };
  const onDelete = (targetId) => {
    setTodo(todo.filter((it) => it.id !== targetId));
  };
  return (
    <div className="App">
      <Header />
      <TodoEditor onCreate={onCreate} />
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
