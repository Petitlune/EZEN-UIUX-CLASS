const arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

//중헙 for문
//Math 수학 객체 => max() 사용
const solution = (arr) => {
  //자바스크립트에서 사용할 수 있는 가장 작은 값을 기준값으로 정한다.
  let answer = Number.MIN_SAFE_INTEGER;
  //반복 실행하고자하는 숫자 정의
  let n = arr.length;
  // 연산된 저장값 저장할 공간
  let sum1 = 0; //행
  let sum2 = 0; //열

  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
};

console.log(solution(arr));
