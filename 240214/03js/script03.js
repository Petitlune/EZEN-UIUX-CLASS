// 교통비 받고 식비 받고 음료비 받고
// 모두 합산
// 1만원 미만인지 여부를 확인
// 결과값에 따라서 A메세지 B메세지 출력 결정
// 출력

// const bus = Number(prompt("교통비를 입력해주세요"));
// const food = Number(prompt("식비를 입력해주세요"));
// const drink = Number(prompt("음료비를 입력해주세요"));
// const sum = bus + food + drink;
// let result = sum < 10000;
// result = result
//   ? `${plus} 남았습니다. 잘하셨습니다`
//   : `${minus}조금만더 노력해주세요`;
// document.write(result);

// const plus = 10000 - sum;
// const minus = sum - 10000;

const traffic = Number(prompt("교통비를 알려주세요!", "ex.3000"));
const eat = Number(prompt("식비를 알려주세요!", "ex.5000"));
const drink = Number(prompt("음료비를 알려주세요!", "ex.2000"));

const sum = traffic + eat + drink;
let result = sum < 10000;
const result1 = 10000 - sum;
const result2 = sum - 10000;

result = result
  ? `${result1}원 남았어요! 돈관리 잘하셨어요!`
  : `${result2}원 초과했어요! 조금만 더 노력해주세요`;
document.write(result);
