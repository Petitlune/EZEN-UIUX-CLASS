// 연필 1다시 = 12자루
// 1명에서 1자루씩
// 1명당 1/12다스
// N명당 N/12다스

//쌤이 한거

const a = Number(prompt("사람 수"));

const solution = (n) => {
  let answer;
  answer = Math.ceil(n / 12);
  return answer;
};

console.log(solution(a));

//내가 한거
// const a = Number(prompt("1000이하의 자연수 입력"));

// const das = () => {
//   return Math.ceil(a / 12);
// };

// console.log(`${a}명의 학생에겐`, `연필 ${das(a)}다스가 필요합니다.`);
