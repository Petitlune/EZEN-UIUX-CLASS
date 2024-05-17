const word = prompt("영어입력");

const soultion = (word) => {
  let answer = "";
  for (let down of word) {
    if (down === down.toLowerCase()) {
      answer += down.toUpperCase();
    } else {
      answer += down.toLowerCase();
    }
  }
  return answer;
};

console.log(soultion(word));
