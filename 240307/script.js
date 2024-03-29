//서버 통신
// 1. 왜 필요한가? 이유 설득 & 합리적
// html, css, js => 기초 문법 / 예제
// ToDoList :기본 레이아웃 정렬, DOM 사용자 데이터 값 수신, 의도한 화면 영역에 출력, 수신받은 데이터 저장가능  ----> 이거 하나는 완벽하게 이해해야한다.

// 만약 용량 큰 데이터를 사용자가 받아서 처리해야하는 상황이라면?
// 서버 : 사용자가 입력한 데이터를 보관, 처리하는 웹 상의 가상 공간

// input => id & pw
// 약속을 지켜야지만 서버에게 데이터 보내고 가져오기 가능. === 서버 통신은 프로토콜(규약)이 존재한다.
// <규약은 http라는 프로토콜을 작성하는 것>
// http = hyper text transfer protocal
// https : s 는 security 보안패치!

// 서버와 통신규약을 지켰다. : 서버에 데이터를 주거나 또는 받을 수 있다.
//method : get => 서버에 특정 데이터를 요청하겠다.
//method : post => 서버에 특정 데이터를 주겠다

// 200: 서버에 정상적 자료 요청 , 서버 정상저그 자료 전송
// 404: 서버 요청 => but 데이터 찾지 못했을 때
// 400 | 401 : 정상적으로 요청 => 권한 없을때 403: 권한 없을때도 계속 접속하려할때 페이지 없애버림
// 503: 서버에 정상적 요청 => 서버가 정상적으로 작동할 수 없을 경우.(서버 다운)

//태초에 js => 웹브라우저에서만 사용할 수 있도록 만든 한정적인 제약 언어!
//json파일 => 서버와 소통하기 위해서 번역된 언어

const student = {
  name: "영심이",
  major: "체육교육",
  grade: 3,
};
const json = JSON.stringify(student);
// console.log(student);
console.log(json); //json 타입으로 바뀌었다.

const json_obj = JSON.parse(json); //JSON을 다시 웹브라우저 언어로 만들기 위한 기본 구조

console.log(json_obj);
//서버와 우리가 통신
//서버와 클라이언트가 통신규약 아래에서 통신

//AJAX :비동기 처리 방식으로 클라이언트 & 서버간 통신할 수 있도록 해주는 통신기법 중 하나. (모든 서버는 비동기 방식으로 데이터를 끌어와야한다. ) (활용방법은 과거에는 XMLHttpRequest 현재에는 fetch)
//Asynchronous(비동기) Javascript(웹에서 사용가능한 언어) And XML(과거에 서버에서 실질적으로 사용할 수 있는 언어)
//JSON : 언어를 의미하는 것이 아니라, 자바스크립트 언어를 서버가 이해할 수 있도록 변환 시켜주는 표기법
