const A = [2, 3, 3, 1, 3];
const B = [1, 1, 2, 2, 3];

//A가 이긴다는 기준을 모두잡고 if문 활용

const solution = (A, B) => {
  let answer = "";
  for (let i = 0; i < A.length; i++) {
    if (A[i] === B[i]) {
      answer += "D";
    } else if (A[i] === 1 && B[i] === 3) {
      answer += "A";
    } else if (A[i] === 2 && B[i] === 1) {
      answer += "A";
    } else if (A[i] === 3 && B[i] === 2) {
      answer += "A";
    } else {
      answer += "B";
    }
  }
  return answer;
};

console.log(solution(A, B));
