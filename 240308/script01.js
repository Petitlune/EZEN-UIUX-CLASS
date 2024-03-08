// input 태그 통해서 사용자에게 어떤 숫자를 받을것임.
// 사용자가 숫자 입력후 클릭 => 결과
// 만약 10보다 큰 숫자를 입력했다면, 알림창을 통해서 10보다 작은 숫자를 입력하세요. 라는 메세지가 출력되게 할 것이고
// 만약 10보다 작은 숫자 입력 => result라는 공간에 해당 숫자 출력
// 단. 해당 코드를 어제 배운 try, catch, finally 문을 활용!

const result = document.querySelector("#result");
const number = document.querySelector("input[type='text']");
const button = document.querySelector("form");
console.log(number);

const resultNum = (e) => {
  e.preventDefault();
  let n = number.value;
  try {
    if (n === "" || isNaN(n)) {
      throw "숫자를 입력하세요";
    }
    n = Number(n);
    if (n < 10) {
      result.innerText = n;
    }
    if (n >= 10) {
      throw "10보다 작은 숫자를 입력하세요";
    }
  } catch (err) {
    alert(err);
  } finally {
    number.value = "";
  }
};
button.addEventListener("submit", resultNum);
