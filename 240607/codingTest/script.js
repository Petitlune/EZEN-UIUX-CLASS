// const solution = (string) => {
//   const stack = [];

//   for (let str of string) {
//     if (str === "(") {
//       stack.push(str);
//     } else {
//       if (stack.length === 0) return false;

//       stack.pop();
//     }
//   }
//   return stack.length === 0;
// };

// console.log(solution("(()(()))(()"));

const a = "(()(()))(()";

const solution = (a) => {
  let answer = "YES";
  let stack = [];

  for (let x of a) {
    if (x === "(") {
      stack.push(x);
    } else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  if (stack.length > 0) {
    return "NO";
  }
  return answer;
};

console.log(solution(a));
