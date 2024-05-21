//from 함수와 중첩 for문 이용
const arr = [87, 89, 93, 100, 76];

const solution = (arr) => {
  const n = arr.length;

  let newArr = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) newArr[i]++;
    }
  }
  return newArr;
};

console.log(solution(arr));
