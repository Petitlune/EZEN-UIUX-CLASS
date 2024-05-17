const word = prompt("소문자 입력");

const solution = () => {
  let answer = "";

  let middle = Math.floor(word.length / 2);

  // substring(a, b) => 시작인덱스(a), 종료인덱스(b) 문자열 반환
  if (word.length % 2 === 1) {
    answer = word.substring(middle, middle + 1);
  } else {
    answer = word.substring(middle - 1, middle + 1);
  }
  return answer;
};

console.log(solution(word));
