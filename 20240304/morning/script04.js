// map() / reduce()

// map() : 원본 배열을 그대로 둔 상태에서 특정 연산 작업을 한 결과값을 새로운 배열로 만들고 싶을때 사용

const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map((number) => {
  return number * 2;
});
console.log(newNumbers);
console.log(numbers);

// const newNumbers02 = numbers.map((number, index) => {
//   return index + number * 3;
// });
// 실행문 && 표현식문 따라서 아래와같이(실행문) 쓸 수 있다.
const newNumbers02 = numbers.map((number, index) => index + number * 3);
console.log(newNumbers02);
console.log(numbers);

//filter 함수
const scores = [90, 35, 64, 88, 45, 92];
// const highScores = scores.filter((score) => {
//   return score >= 85;
// });
// console.log(highScores);
const highScores2 = scores.filter((score, index) => {
  if (score >= 85) {
    console.log(`index : ${index}, score : ${score}`);
  }
  return score;
});

// reduce : 누산기(=누적 계산기)
const objects = [1, 2, 3, 4, 5];
//total 누산기 역할 , current는 현재값 역할
// const result = objects.reduce((total, current) => {
//   return total + current;
// }, 0);
const result = objects.reduce((total, current) => total + current, 0);
console.log(result);
