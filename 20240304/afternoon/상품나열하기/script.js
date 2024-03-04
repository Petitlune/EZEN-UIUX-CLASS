import products from "./product.js";
//모듈 => 레고의 완성품을 조립하고자 할 때 개별요소를 블록
//자바스크립트 언어를 만들고 관리하고 있는 ES 기관에서는 모듈을 표준화하지 않았다.
const button = document.querySelector("button");
console.log(button);

const createItem = (product) => {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const span = document.createElement("span");
  const img = document.createElement("img");
  const div = document.createElement("div");

  li.id = product.id;

  const attr = document.createAttribute("src");
  attr.value = product.img;
  img.setAttributeNode(attr);

  h3.innerText = product.name;
  h3.className = "name";

  const price = new Intl.NumberFormat("ko-kr", {
    style: "currency",
    currency: "KRW",
  }).format(product.price);

  span.className = "price";
  span.innerText = price;

  div.append(h3, span);
  li.append(div, img);
  ul.appendChild(li);
};
const importData = () => {
  products.data.map((product) => {
    if (!document.getElementById(product.id)) {
      createItem(product);
    }
  });
};
// button.addEventListener("click", importData);
importData(); // 클릭 안했어도 바로 출력시키고 싶을때
