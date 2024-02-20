// DOM에서 Data를 찾아오는 방법(최근)
// const h1 = document.querySelector("h1");
// const profile = document.querySelector("#profile");
// const img = document.querySelector("#profile img");
// //복수의 값을 찾아올때는 querySelectorAll로 찾아와야함 - 이때는 무조건 배열로 찾아옴. => 각각의 요소가 인덱스를 갖는다. => 각각의 요소를 불러올 수 있다.
// const users = document.querySelectorAll(".user");
// const address = users[1];
// console.log(users);
// console.log(address);

//DOM에서 Data를 찾아오는 방법(예전)

// const h1 = document.getElementsByTagName("h1");
// const profile = document.getElementById("profile");
// const users = document.getElementsByClassName("user");
// const address = users[2];

// console.log(users);
// console.log(address);

//선택해온 부분의 값을 바꾸어보기

// const desc = document.querySelector("#desc");
//객체로 사용하기 위함. DOM에서 찾아온 요소에 text값을 넣을때 innerText사용
// desc.innerText = "이름 : 홍길동";
// const descName = desc.innerText;
// console.log(descName);
// const descHtml = desc.innerHTML;
// console.log(descHtml);
//해당요소가 담고있는 모든 텍스트를 갖고 온다.(display:none이어도 갖고온다.)
// const descContext = desc.textContent;
// console.log(descContext);

//이벤트 핸들러  => 이벤트 작동 실행!! but 이벤트 리스너를 더 많이 사용하긴 함.
//onclick --> on이 앞에 붙는 것들은 대부분 이벤트 핸들러라고 생각하면 됨.

// const title = document.querySelector("h1");
// title.onclick = function () {
//   title.innerText = "나의 프로필";
// };
// title.onclick = () => (title.innerText = "나의 프로필");

// const userName = document.querySelector("#desc p");
// userName.onclick = () => (userName.innerHTML = "이름 : <b>태민이</b>");
// console.log(userName);

// const pfImg = document.querySelector("#profile img");
// pfImg.onclick = () => (pfImg.src = "./images/pf2.png");

const title = document.querySelector("h1");
title.onclick = () => {
  title.style.backgroundColor = "#000";
  title.style.color = "#fff";
};
const userName = document.querySelectorAll(".user")[0];

//classList는 앞에 붙은 객체에 해당 class가 있는지 확인하는 역할
const classGroup = userName.classList;
console.log(classGroup);

// userName.onclick = () => {
//   userName.classList.add("clicked");
// };
//add는 class값 추가
//앞단에서 찾아온 class에 특정한 class값이 있으면 참, 없으면 거짓 ==>contains
// const clickedTrue = userName.classList.contains("clickeds");
// console.log(clickedTrue);

//clicked를 애초에 주지 않았기 때문에 if (userName.classList.contains("clicked")) 값은 false 따라서 앞쪽에 부정( ! )을 넣어주면 값이 true 가 됨.
// userName.onclick = () => {
//   if (!userName.classList.contains("clicked")) {
//     userName.classList.add("clicked");
//   } else {
//     userName.classList.remove("clicked");
//   }
// };

//토글함수로 간편화되었다.
userName.onclick = () => {
  userName.classList.toggle("clicked");
};
