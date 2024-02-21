//-------option 선택하기
// //select 태그의 아이디 태그 찾아온다(옵션 상위 태그)
// const major = document.querySelector("#major");

// //옵션 값을 찾아오고 싶다.(배열로 찾아온다.)
// console.log(major.options); //배열함수는 진짜 중요 마스터 필수

// //학과 선택시 선택 학과 알림창으로 띄우기
// //함수 선언
// const displaySelect = () => {
//   const selectedText = major.options[major.selectedIndex].innerText;
//   // console.log(selectedText);
//   alert(`${selectedText}를 선택했습니다.`);
// };
// //함수 호출
// major.onchange = displaySelect;

//--------------radio 버튼 찾아오기

// const subject = document.testForm.subject;
// console.log(subject); //콘솔창에 라디오노드리스트가 배열 형식으로 나타남

// 바깥쪽 큰따옴표 썼으면 안쪽은 무조건 작은 따옴표
// const checked = document.querySelector("input[name='subject']:checked");
// console.log(checked);

// check박스 콘솔창에 실행시켜 보기
// document.querySelectorAll("input[name='mailing']:checked") ==> 체크 된 것들이 배열로 보여짐
