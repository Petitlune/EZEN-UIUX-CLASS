//난장이 키 합이 100, 진짜 일곱난장이는?

const arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];

const solution = () => {
  const answer = arr;
  //누산기 이용 reduce (콜백함수랑 ,초기값을 받음)
  const sum = answer.reduce((a, b) => a + b, 0);
  let flag = false;

  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (answer[i] + answer[j]) === 100) {
        answer.splice(j, 1);
        answer.splice(i, 1);
        flag = true;
        break;
      }
    }
    if (flag) break;
  }
  return answer;
};

// const solution = () => {
//   let real;
//   let total;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//     console.log(sum);
//     if (total === 100) arr[i] = real;
//   }
//   return real;
// };

console.log(solution(arr));
