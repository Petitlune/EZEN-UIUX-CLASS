//등록버튼 값 , input태그 안에 값, ul 태그
//등록을 누르면 ul태그 안에 li 태그 생성
// li태그 안에 input 안에 value 값 출력되게 함.

const input = document.querySelector("form input[type='text']");
const form = document.querySelector("form");
const ul = document.querySelector("ul");

// const submit = document.querySelector("input[type:'submit']");
// form 정의 대신 위처럼 주어서 submit에 onclick이벤트로 주어도 동일함

const formFnc = (e) => {
  e.preventDefault();
  if (input.value !== "") {
    const li = document.createElement("li");
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = "";
    // const text = input.value;
    // console.log(text);
  }
};

form.onsubmit = formFnc;

// 사용자가 입력하는 값을 찾아오기 위해 input 정의
// 사용자가 클릭할 버튼에 대한 정의
// 버튼을 클릭했을 때 이벤트에 대한 기능 정의
// li 태그를 DOM에서 생성 => 입력창을 통해서 전달받은 값을 li 태그 삽입 시켜주고 ul 태그의 자식요소로 사용해야함
// 사용자가 입력한 값을 출력할 공간에 대한 정의 필요
