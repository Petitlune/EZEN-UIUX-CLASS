const word = prompt("연속된 대문자 문자열");

const solution = (word) => {
  let answer = "";
  let count = 0;

  const test = word;

  for (let i = 0; i < word.length; i++) {
    if (test[i] === test[i + 1]) {
      count++;
    } else {
      answer += test[i];
      if (count > 1) {
        answer += String(count);
        count = 1;
      }
    }
  }
  return answer;
};

console.log(solution(word));
