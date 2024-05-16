const text = prompt("영어 문자를 입력하세요");

const word = prompt("알파벳 한개를 입력하세요");

const solution = (text, word) => {
  let answer = 0;
  for (let a of text) {
    if (a === word) answer++;
  }
  return answer;
};

console.log(solution(text, word));
