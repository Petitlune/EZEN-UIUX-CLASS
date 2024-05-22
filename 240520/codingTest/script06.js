const word = prompt("문자를 입력해주세요");

const solution = (word) => {
  let answer = "YES";
  const test = word.toUpperCase();
  let len = test.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (test[i] !== test[len - i - 1]) {
      return "NO";
    }
  }
  return answer;
};

console.log(solution(word));
