const arr = [5, "teacher", "time", "student", "beautiful", "good"];

// const solution = (arr) => {
//   let wordLength = [];
//   for (let i = 0; i < arr.length; i++) {
//     wordLength.push(arr[i].split("").length);
//   }
//   let maxLength = Math.max(...wordLength);
//   let longestWord = wordLength.indexOf(maxLength);
//   return arr[longestWord];
// };

const solution = (arr) => {
  let answer = "";
  let max = Number.MIN_SAFE_INTEGER;
  for (let text of arr) {
    if (text.length > max) {
      max = text.length;
      answer = text;
    }
  }
  return answer;
};

console.log(solution(arr));
