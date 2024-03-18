const form = document.querySelector("form");
const blocks = document.querySelectorAll(".list");
// console.log(blocks);

let from,
  to = undefined;
// let todoList = [];
// let doingList = [];
// let doneList = [];
// 밑에와 같이 한방에 써줄 수 있다
let todoList = [],
  doingList = [],
  doneList = [];

const lists = {
  todo: todoList,
  doing: doingList,
  done: doneList,
};

const saveList = (listId) => {
  localStorage.setItem(listId, JSON.stringify(lists[listId]));
};

const dragstart = (e) => {
  from = e.target.parentElement.id;
  to = from;
};

const dragover = (e) => {
  const { id: targetId } = e.target;
  const listIds = Object.keys(lists);
  // console.log(listIds, targetId);
  if (listIds.includes(targetId)) {
    to = targetId;
  }
};

const dragend = (e) => {
  //구조분해 할당 사용
  const { id } = e.target;
  //예외조항처리
  if (from === to) {
    return;
  } else {
    e.target.remove();
    lists[from] = lists[from].filter((todo) => {
      if (todo.id !== id) {
        return todo;
      } else {
        createElement(to, todo);
      }
    });
  }
  saveList(from);
  saveList(to);
};

//안되는 부분 확인 필요
const removeTodo = (e) => {
  e.preventDefault();
  // console.log("remove");
  const { id } = e.target;
  const { id: listId } = e.target.parentElement;
  e.target.remove();
  lists[listId] = lists[listId].filter((todo) => {
    return todo.id !== id;
  });
  saveList(listId);
};
const createElement = (listId, todo) => {
  const list = document.querySelector(`#${listId}`);
  const item = document.createElement("div");
  item.id = todo.id;
  item.innerText = todo.text;
  item.className = "item";
  //드래그 앤 드롭 기능 사용하려면 반드시 draggable 속성 값이 true로 존재해야함.
  item.draggable = true;
  item.addEventListener("dragstart", dragstart);
  item.addEventListener("dragend", dragend);
  //마우스 오른쪽 버튼 눌렀을 때 이벤트 함수 contextmenu
  // item.addEventListener("contextmenu", removeTodo);
  list.appendChild(item);
  lists[listId].push(todo);
};

const createTodo = (e) => {
  e.preventDefault();
  const input = document.querySelector("input[type='text']");
  //형 변환이 필요하다!
  const id = String(Date.now());
  // const id = uuidv4();

  //1.처음 데이터가 생성되면, todo로 간다
  //2.드래그 드롭 기능 todo : 객체 담을 수 있어야함, doing : 객체 담을 수 있어야함, done : 객체 담을 수 있어야함

  // const text = input.value;

  const newTodo = {
    id,
    text: input.value,
  };
  createElement("todo", newTodo);
  input.value = "";
  saveList("todo");
};

const loadList = () => {
  const userTodoList = JSON.parse(localStorage.getItem("todo"));
  const userDoingList = JSON.parse(localStorage.getItem("doing"));
  const userDoneList = JSON.parse(localStorage.getItem("done"));
  if (userTodoList) {
    userTodoList.forEach((todo) => {
      createElement("todo", todo);
    });
  }
  if (userDoingList) {
    userDoingList.forEach((todo) => {
      createElement("doing", todo);
    });
  }
  if (userDoneList) {
    userDoneList.forEach((todo) => {
      createElement("done", todo);
    });
  }
};
loadList();

form.addEventListener("submit", createTodo);
blocks.forEach((block) => {
  block.addEventListener("dragover", dragover);
});
