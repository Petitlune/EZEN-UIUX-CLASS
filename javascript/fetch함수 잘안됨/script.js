// function devide(numA, numB) {
//   return new Promise((resovle, reject) => {
//     if (numB === 0) reject(new Error("unable"));
//     else resovle(numA / numB);
//   });
// }

// devide(8, 0)
//   .then((result) => console.log("성공:", result))
//   .catch((error) => console.log("실패"));

// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => response.json())
//   .then((json) => {
//     const data = json; // 추출된 JSON 데이터
//     // 여기서 'data'를 사용하거나 함수에 전달할 수 있습니다.

//     const box = document.querySelector("#container");
//     box.innerHTML = JSON.stringify(
//       data.forEach((id) => {
//         id = data.id;
//       })
//     );
//   })
//   .catch((error) => console.error("데이터를 가져오는 중 오류 발생:", error));

const container = document.querySelector("#container");
let data;

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((fetchedData) => {
    // fetch된 데이터를 전역 변수인 data에 할당
    data = fetchedData;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// fetch 외부에서도 data를 사용할 수 있음
// 예시: data의 첫 번째 아이템의 name을 콘솔에 출력

console.log(data);
