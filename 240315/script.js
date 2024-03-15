const todoInput = document.querySelector("#todo-input");
const addButton = document.querySelector("form");
const todoList = document.querySelector("#todo-list");

const getLocal = () => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach((todo) => {
    const newDiv = document.createElement("div");
    newDiv.className = "todo";
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.className = "todo-content";

    const completeBtn = document.createElement("button");
    completeBtn.innerText = "완료";
    const deletBtn = document.createElement("button");
    deletBtn.innerText = "삭제";

    newDiv.append(newTodo, completeBtn, deletBtn);
    todoList.appendChild(newDiv);
  });
};

// 첫번째 방법
//웹브라우저가 새로고침 되었을 때 함수 바로 실행. 로컬스토리에 값 찾아오는 역할을 함
// const getLocal = () => {
//   let todos;
//   if (localStorage.getItem("todos") === null) {
//     todos = [];
//   } else {
//     todos = JSON.parse(localStorage.getItem("todos"));
//   }
// };

const saveToLocal = (todo) => {
  let todos = [];
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const addTodo = (e) => {
  e.preventDefault();
  if (todoInput.value !== "") {
    const newDiv = document.createElement("div");

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newDiv.className = "todo";
    newTodo.className = "todo-content";

    const completeBtn = document.createElement("button");
    completeBtn.innerText = "완료";
    completeBtn.className = "complete-btn";

    const deletBtn = document.createElement("button");
    deletBtn.innerText = "삭제";
    deletBtn.className = "delet-btn";

    newDiv.append(newTodo, completeBtn, deletBtn);
    todoList.appendChild(newDiv);
    saveToLocal(todoInput.value);

    todoInput.value = "";
  }
};

const removeLocal = (todo) => {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  const index = todos.indexOf(todo.children[0].innerText);
  console.log(index);
  todos.splice(index, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const manageTodo = (e) => {
  const whichBtn = e.target.classList[0];
  // console.log(e.target.classList[0]);
  if (whichBtn === "complete-btn") {
    const todo = e.target.parentElement;
    console.log(todo.children[0]);
    todo.children[0].classList.toggle("complete");
  } else if (whichBtn === "delet-btn") {
    let todo = e.target.parentElement;
    removeLocal(todo);
    todo.remove();
  }
};

addButton.addEventListener("submit", addTodo);

// 두번째 방법
document.addEventListener("DOMContentLoaded", getLocal); //돔의 컨텐츠를 모두 로딩하게 된다면. getLocal함수 실행

todoList.addEventListener("click", manageTodo);
