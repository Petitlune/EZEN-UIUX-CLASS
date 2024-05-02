//명령형 방식으로 더하기
let oddSum = 0;

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 1) {
//     oddSum += i;
//   }
// }
for (let i = 1; i <= 100; i += 2) {
  oddSum += i;
}

console.log(oddSum);
