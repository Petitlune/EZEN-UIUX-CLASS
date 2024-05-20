const arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
//1 0 1 2 3 0 0 1 2 0

const solution = (arr) => {
  let answer = 0;
  let cnt = 0; //가점 컨드롤
  for (let x of arr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else {
      cnt = 0;
    }
  }
  return answer;
};

console.log(solution(arr));
