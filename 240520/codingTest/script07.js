const word = "dssd dssd";

const solution = (word) => {
  let answer = "YES";
  const test = word.toLowerCase().replace(/[^a-z]/g, "");
  if (test.split("").reverse().join() !== test) {
    return "NO";
  }
  return answer;
};

console.log(solution(word));
