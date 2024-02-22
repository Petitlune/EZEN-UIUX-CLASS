// window.onload = alert("안녕하세요!");
// const body = document.querySelector("body");
const btn = document.querySelector("button");

// 변수 뒤에는 속성이거나 method 둘중 하나만 올 수 있음
//onclick 이라는 이벤트 핸들러 사용
// btn.onclick = () => {
//   body.style.backgroundColor = "royalblue";
// };
// => refactoring 작업
// const btnFnc = () => {
//   body.style.backgroundColor = "royalblue";
// };

//윈도우에 이미 body가 내장되어 있기 때문에 굳이 body 태그를 찾아오지 않고 아래와 같이 써주어도 됨.
// const btnFnc = () => {
//   document.body.style.backgroundColor = "royalblue";
// };

// btn.onclick = btnFnc;

// ====== 키보드 이벤트 사용
const result = document.querySelector("#result");

// e = 이벤트 객체 : 변수 이름은 아무거나 가능
document.body.onkeydown = (e) => {
  result.innerText = `code : ${e.code},
  key : ${e.key}`;
};
