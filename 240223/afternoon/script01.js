// //제목, 저자, 저장하기, 출력공간 정의
// const title = document.querySelector("#title");
// const author = document.querySelector("#author");
// const save = document.querySelectorAll(".btn")[0];
// const delet = document.querySelectorAll(".btn")[1];
// const bookList = document.querySelector("#bookList li");

// // const newTitle = title.value;
// // const newAuthor = author.value;
// console.log("bookList");

// save.addEventListener("click", (e) => {
//   e.preventDefault();
//   const newTitle = title.value;
//   const newAuthor = author.value;
//   bookList.innerText = newTitle;
//   const deletBtn = document.appendChild(bookList);
// });

// 1. 제목과 저자의 값을 찾아온다.
// - input > .value 가져와야겠다고 생각하기
// 2-0. 이벤트가 작동하도록 해주는 저장하기 버튼 정의
// button => click
//form => submit
// 2. 찾아온 값을 출력해주도록 도와주는 이벤트 함수 필요. addEventListener
// 3. 출력할 공간에 대한 정의
// 4. 삭제하기 버튼 정의 - createElement, appenChild
// 5. 삭제하기 버튼 클릭시 목록 삭제 이벤트 함수 필요 -
// parentNode / removeChild - 삭제버튼 복수 생성 => 반복문 사용해서 클릭한 삭제버튼 찾아오기 위해서 => this (*클래스 함수 VS 화살표 함수)

const save = document.querySelector("form");
const bookList = document.querySelector("#bookList");

save.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const li = document.createElement("li");
  li.innerHTML = `${title.value}  - ${author.value}
  <span>삭제</span>`;
  bookList.appendChild(li);
  title.value = "";
  author.value = "";

  const delButtons = document.querySelectorAll("span");
  for (let delButton of delButtons) {
    delButton.addEventListener("click", function () {
      this.parentNode.parentNode.removeChild(this.parentNode);
    });
    //부모의 부모 타고 올라감 == ul태그
  }
});
