const word = prompt("문자입력");

const solution = (word) => {
  let answer = "";
  for (let i = 0; i < word.length; i++) {
    if (word.indexOf(word[i]) === i) answer += word[i];
  }
  return answer;
};

console.log(solution(word));

//반복되는 문자 제거하고 출력하기
