const img = document.querySelector(".profile");
const name = document.querySelector(".name");
const email = document.querySelector(".email");
const desc = document.querySelector(".desc");

const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");
const randomBtn = document.querySelector(".randomBtn");

fetch("./mockup.json")
  .then((response) => response.json())
  .then((json) => {
    data = json.items;

    const member = (i) => {
      img.src = data[i].image;
      name.innerText = data[i].name;
      email.innerText = data[i].email;
      desc.innerText = data[i].body;
    };
    let i = 0;
    window.addEventListener("DOMContentLoaded", member(0));
    rightBtn.addEventListener("click", () => {
      i++;
      if (i >= 0 && i < data.length) {
        member(i);
      } else {
        i--;
      }
    });
    leftBtn.addEventListener("click", () => {
      if (i < data.length && i > 0) {
        member(i - 1);
        i--;
      } else {
        i = 0;
      }
    });

    randomBtn.addEventListener("click", () => {
      const match = Math.floor(Math.random() * data.length);
      member(match);
      i = match;
    });
  });

//random 함수를 눌렀을 때는 i 값에 match를 할당해줌으로써 이슈 해결.
//fetch 함수를 이용해  json 파일에서 값을 불러옴.
