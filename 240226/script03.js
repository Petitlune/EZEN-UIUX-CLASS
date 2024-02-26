// 사용자로부터 오늘부터 며칠간 만 보 걷기를 했는지 물어보고 임의의 숫자 받기
// 00일 연속 달성이 출려될 수 있도록 해주세요.

//알림창 활용해서 날짜 받기
//날짜를 밀리초로 환산
//오늘날짜 확인하기
//오늘날짜 밀리초로 환산
//오늘 날짜밀리초 - 사용자한테 받은 날짜밀리초
//나온값을  (24*60*60*1000밀리초)로 나눠줌
//나눠준 값을 result안에 innerText로 출력해줌.

const userQuery = prompt("언제 만보 걷기를 시작했나요?", "ex.2024-01-09");

const now = new Date();
const result = document.querySelector("#result");
const toNow = now.getTime();
const userDate = new Date(userQuery);
const userStart = userDate.getTime();
const passsedTime = toNow - userStart;
const passedDay = Math.floor(passsedTime / (24 * 60 * 60 * 1000));

result.innerHTML = passedDay;
