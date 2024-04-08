// function devide(numA, numB) {
//   return new Promise((resovle, reject) => {
//     if (numB === 0) reject(new Error("unable"));
//     else resovle(numA / numB);
//   });
// }

// devide(8, 0)
//   .then((result) => console.log("성공:", result))
//   .catch((error) => console.log("실패"));

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => json.data);
// const box = document.querySelector("#container");
// box.innerHTML = `<h2>${data[0].title}</h2>`;
