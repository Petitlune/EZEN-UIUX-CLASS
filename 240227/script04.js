// const btn = document.querySelector("button");
// const result = document.querySelector(".result");
// const menu = ["짜장면", "돈가스", "부대찌개", "회덮밥", "마라탕"];
// const rndMenu = menu[Math.ceil(Math.random() * 4)];

// console.log(menu);

// btn.addEventListener("click", () => {
//   result.innerText = rndMenu;
// });

const menu = ["짜장면", "돈가스", "부대찌개", "회덮밥", "마라탕"];
const menuNum = Math.floor(Math.random() * menu.length);
const result = menu[menuNum];

document.write(result);
