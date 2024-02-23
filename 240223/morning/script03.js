//order button 정의하기
//orderinfo 정의하기
//h2 태그 정의
//h2태그 안에 텍스트를 orderinfo에 넣어준다.

const btn = document.querySelector("#order");
const title = document.querySelector("h2");
const info = document.querySelector("#orderInfo");

btn.addEventListener(
  "click",
  () => {
    const newP = document.createElement("p");
    const textNode = document.createTextNode(title.innerText);
    console.log(textNode);
    newP.appendChild(textNode);
    newP.style.color = "crimson";
    newP.style.fontSize = "5rem";
    info.appendChild(newP);
  },
  { once: true }
);
