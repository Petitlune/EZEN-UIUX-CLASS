const userNum01 = Number(prompt("첫번째 숫자를 입력하세요."));
const userNum02 = Number(prompt("두번째 숫자를 입력하세요."));
//클래스 함수
//클래스 함수이기 때문에 호출이 먼저 왔어도 실행가능
sum(userNum01, userNum02);

function sum(x, y) {
  const result = x + y;
  alert(`두수의 합은 ${result}입니다.`);
}

//익명 함수 -함수의 이름이 없는 대신 특정한 변수로 할당해주어야 함.

// const sum = function (x, y) {
//   const result = x + y;
//   alert(`두 수의 합은 ${result}입니다.`);
// };
//화살표 함수
// const sum = (a, b) => {
//   const result = a + b;
//   alert(`두수의 합은 ${result}입니다.`);
// };
//익명함수와 화살표 함수는 함수의 선언보다 호출이 먼저 오면 실행 안됨.
// sum(userNum01, userNum02);
