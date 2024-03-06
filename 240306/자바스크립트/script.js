import products from "./product.js";

const createItem = function (product) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const span = document.createElement("span");
  const div = document.createElement("div");
  const img = document.createElement("img");
  const a = document.createElement("a");

  li.id = product.id;

  const attr = document.createAttribute("src");
  attr.value = product.img;
  img.setAttributeNode(attr);
  img.onclick = function () {
    img.target = "_blank";
    img.href = "https://www.etude.com/product/new/";
  };

  h3.className = "name";
  h3.innerText = product.name;
  //원화로 만들어주는 방법
  const price = new Intl.NumberFormat("ko-kr", {
    style: "currency",
    currency: "KRW",
  }).format(product.price);

  span.className = "price";
  span.innerText = `${price}원`;

  a.className = "description";
  a.innerHTML = product.desc;

  a.onclick = function () {
    a.target = "_blank";
    a.href = "https://www.etude.com/product/new/";
  };
  a.append(img);
  div.append(h3, span);
  li.append(a, div);
  ul.appendChild(li);
};

const importData = () => {
  products.data.map((product) => {
    if (!document.getElementById(product.id)) {
      createItem(product);
    }
  });
};

importData();
