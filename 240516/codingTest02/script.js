const Text = prompt("문자를 입력하세요");

const soultion = (Text) => {
  let answer = 0;
  for (let a of Text) {
    if (a === a.toUpperCase()) answer++;
  }
  return answer;
};

console.log(soultion(Text));
