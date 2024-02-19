//사용자로 부터 숫자 하나를 받고 해당 숫자가 양수인지 음수 인지 0인지 판단해서 알림창을 활용해 이에대한 결과를 출력해주세요.
//반환값이 숫자일 경우에만 함수를 실행시켜주세요.

// 1.사용자로부터 숫자를 받는다
// 2. 숫자인 경우를 필터링 한다.
// 3. 해당 숫자 조건식에 따라서 양수 음수 0 구별
// const userNumber = parseInt("숫자를 입력해주세요");

// const Num = function (result) {
//   if (userNumber > 0) {
//     alert("양수입니다");
//   }
//   else if (userNumber < 0) {
//     alert("음수입니다.")
//   }
//   else
// };
// Num();

const isPositive = (s) => {
  if (s > 0) {
    alert(`${s}은 양수입니다.`);
  } else if (s < 0) {
    alert(`${s}은 음수입니다.`);
  } else {
    alert(`${s}은 0입니다.`);
  }
};

const number = parseInt(prompt("숫자를 입력해주세요!"));
// console.log(isNaN("안녕"));
if (!isNaN(number)) {
  isPositive(number);
}
