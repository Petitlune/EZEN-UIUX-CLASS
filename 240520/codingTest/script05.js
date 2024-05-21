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
  let row = 0;
  let column = 0;
  let cross = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      row += arr[i][j];
    }
    for (let j = 0; j < arr.length; j++) {
      row += arr[0][j];
    }
    return row;
  }
};

console.log(solution(arr));
