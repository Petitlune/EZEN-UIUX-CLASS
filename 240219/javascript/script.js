//초보 단계
let num = 0;
num += 1;
num += 2;
num += 3;
num += 4;
num += 5;
//중급 단계  => but 재활용성이 불가능함. 따라서 고급 단계로 함수를 사용
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
//고급 단계
//함수 구현 - for 반복문을 함수로 감싸안음

function clacSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(`1부터 ${n}까지 더하면 ${sum}입니다`);
}

//함수 호출
clacSum(12580);
