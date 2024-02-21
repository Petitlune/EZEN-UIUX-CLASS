// 버튼과 상세설명을 찾아온다
// 버튼에 이벤트 부여한다. (클릭시 나타나고 다시 눌렀을 때 사라지는)

const view = document.querySelector("#view");
const desc = document.querySelector("#detail");
console.log(view);

// view.onclick = () => {
//   if (!desc.classList.contains("active")) {
//     desc.classList.add("active");
//   } else {
//     desc.classList.remove("active");
//   }
// };

view.onclick = () => {
  desc.classList.toggle("active");
};
