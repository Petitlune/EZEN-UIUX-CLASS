//js 태생적으로 동기처리 방식 지원
// 외부에서 데이터 가져올 때 비동기방식으로 처리를 해줘야만 큰 용량의 데이터를 가져오지 못한 상태라도 밑에 다른 작은 규모의 데이터를 가져올 수 있는 효율성을 추구

// const displayHello = () => {
//   console.log("Hello");
// };

// displayHello();

// async function displayHello01() {
//   console.log("Hello");
// }
// displayHello01();
// //fetch랑 async 모두 promise함수

// //순수 promise 객체를 활용한 비동기처리 실행문
// const whatYourFav = () => {
//   const fav = "Javascript";
//   return new Promise((resolve, reject) => {
//     resolve(fav);
//   });
// };

// const displaySubject = (subject) => {
//   return new Promise((resolve, reject) => {
//     resolve(`Hello ${subject}`);
//   });
// };

// whatYourFav().then(displaySubject).then(console.log);

// //async 예약어를 활용해서 Promise 객체 및 사용! ==> 직접적인 promise 함수를 사용하는 것보다 async 사용하는 것이 더 편할 것이다!
// async function whatsYourfav() {
//   const fav = "Shinee World";
//   return fav;
// }

// async function displaySubject01(subject) {
//   return `Hello ${subject}`;
// }

// whatsYourfav().then(displaySubject01).then(console.log);

//await 비동기처리에서 순서를 정해주기
async function whatsYourFavorite() {
  const food = "pizza";
  return food;
}
async function displaySubject02(subject) {
  return `I like ${subject}`;
}

//위 비동기 함수 2개를 감싸안는 비동기 함수 init 만들어보자
async function init() {
  const response = await whatsYourFavorite();
  const result = await displaySubject02(response);
  console.log(result);
}

init();
// whatsYourFavorite();
