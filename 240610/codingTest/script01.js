const exam = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";

const solution = (exam) => {
  let stack = [];

  for (let x of exam) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else {
      stack.push(x);
    }
  }
  return stack.join("");
};
console.log(solution(exam));
//(A(BC)D)EF(G(H)(IJ)K)LM(N)
//[]
