const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   //예외조항 처리 - 빈문자열 넣었을때 실행하지 않도록 방지
//   if (input.value !== "") {
//     const li = document.createElement("li");
//     ul.appendChild(li);
//     li.innerText = input.value;
//     input.value = "";
//   }
// });
let todos = [];
const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
const delItem = (e) => {
  const target = e.target.parentElement;
  todos = todos.filter((todo) => todo.id != target.id);
  save();
  target.remove();
}; //위의 함수를 쪼갠다 = 리팩토링을 해서 분업화시켜준다.
const addItem = (todo) => {
  //예외조항 처리 - 빈문자열 넣었을때 실행하지 않도록 방지
  if (todo.text !== "") {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = todo.text;
    button.innerText = "삭제";
    button.addEventListener("click", delItem);
    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    li.id = todo.id;
  }
};
const handler = (e) => {
  e.preventDefault();
  const todo = {
    id: Date.now(),
    text: input.value,
  };
  todos.push(todo);
  addItem(todo);
  save();
  input.value = "";
};

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));

  if (userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    });
  } else {
    handler();
  }
  todos = userTodos;
};
init();
//삭제버튼 누르면 list 사라지게 만들기

form.addEventListener("submit", handler);
//로컬 스토리지에 이름과 값저장
// localStorage.setItem("Hello", "World");
// //스토리지에 저장된 값을 getItem으로 가져옴
// const myData = localStorage.getItem("Hello");
// console.log(myData);

// React = JS 준수한 프로그래밍 코드 단계
// CRUD = Create Read Update Delete
