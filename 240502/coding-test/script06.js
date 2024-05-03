let arr = [12, 77, 38, 41, 53, 92, 85];
let odd = 0;
let minOdd = new Array();
//쌤이한거
const solution = (arr) => {
  let answer = [];
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  for (let num of arr) {
    if (num % 2 === 0) {
      sum += num;
      if (num < min) min = num;
    }
  }
  answer.push(snm);
  answer.push(min);
  return answer;
};

console.log(solution(arr));

//내가한거
// const oddArr = () => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       minOdd.push(arr[i]);
//       odd += arr[i];
//     }
//   }
//   return odd;
// };

// let container;
// let min = Number.MAX_SAFE_INTEGER;
// for (let i = 0; i < minOdd.length; i++) {
//   if (minOdd[i] < min) container = minOdd[i];
// }

// console.log(oddArr(arr));
