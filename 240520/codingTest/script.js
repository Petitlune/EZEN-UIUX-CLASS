const arr = [6, 7, 3, 9, 5, 6, 12];

const solution = (arr) => {
  let answer = [];
  answer.push(arr[0]); // 비교하기 위헤 초기값 넣어줌
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
};

console.log(solution(arr));