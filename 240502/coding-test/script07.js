// let day = Number(prompt("오늘은 며칠인가요?"));
// let lastNum = Number;
// //사용자 입력한 수의 마지막 숫자만 찾아온다.
// lastNum = day.substr(0);
// console.log(lastNum);

// const solution = () => {};

const arr = [25, 23, 11, 47, 53, 17, 33];

let day = Number(prompt("오늘은 며칠인가요?"));

let lastNum = day % 10;

const solution = (lastNum, arr) => {
  let answer = 0;
  for (let num of arr) {
    // 증감연산자로 조건문에 해당하는 갯수 세어줌
    if (num % 10 === lastNum) answer++;
  }
  return answer;
};

console.log(solution(lastNum, arr));
