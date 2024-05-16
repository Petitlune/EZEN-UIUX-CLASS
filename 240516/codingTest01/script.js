const a = prompt("A가 포함된 영어단어 입력");

const answer = (word) => {
  let b = word;
  //g는 global=전역요소, i=ignore case = 제외 혹은 열외를 허용하지 않음
  b = b.replace(/A/gi, "#");
  return answer;
};

console.log(answer(a));
