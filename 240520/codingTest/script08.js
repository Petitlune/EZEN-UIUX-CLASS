const word = prompt("문자입력");

const solution = (word) => {
  let answer = "";
  for (let w of word) {
    if (!isNaN(w)) answer += w;
  }
  return Number(answer);
};
console.log(solution(word));
