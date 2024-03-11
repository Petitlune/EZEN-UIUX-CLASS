const pizza = () => {
  return new Promise((resolve, reject) => {
    resolve("피자를 주문합니다.");
  });
};

const step1 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("피자 도우 준비");
    }, 7000);
  });
};

const step2 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("토핑 완료");
    }, 10000);
  });
};

const step3 = (message) => {
  console.log(message);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("굽기 완료");
    }, 5000);
  });
};

// pizza()
//   .then((result) => step1(result))
//   .then((result) => step2(result))
//   .then((result) => step3(result))
//   .then((result) => console.log(result))
//   .then(() => {
//     console.log("피자가 준비되었습니다.");
//   });

// 단축해서 쓰기! // then이라는 method가 알아서 resolve의 인자값을 알아서 받아오기 때문에 result값 생략해주어도 됨.
pizza()
  .then(step1)
  .then(step2)
  .then(step3)
  .then(console.log)
  .then(() => {
    console.log("피자가 준비되었습니다.");
  });


  // finally문 ==> 선택적으로 사용할 수 있는 문 ==> resolve reject 함수 실행여부와 관계없이 가장 마지막 종료시점에서 실행되는 문