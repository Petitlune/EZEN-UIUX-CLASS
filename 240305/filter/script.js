import products from "./product.js";
//모듈 => 레고의 완성품을 조립하고자 할 때 개별요소를 블록
//자바스크립트 언어를 만들고 관리하고 있는 ES 기관에서는 모듈을 표준화하지 않았다.

const button = document.querySelector(".container > button");
const newlisting = document.querySelector(".newlisting");
const asceButton = document.querySelector(".ascending");
const descButton = document.querySelector(".descending");
const select = document.querySelector("select");

// 최신 출시순 정렬
const removeItems = () => {
  const items = document.querySelectorAll("li");
  items.forEach((item) => {
    item.remove();
  });
};
const sortNew = () => {
  const myProducts = products.data.sort((a, b) => {
    return a.id - b.id;
  });

  removeItems();

  myProducts.forEach((product) => {
    createItem(product);
  });
};

const selectCategory = (e) => {
  const selectedIndex = e.target.options.selectedIndex;
  const value = e.target.options[selectedIndex].value;
  console.log(value);
  // console.log(e);
  console.log(selectedIndex);
  // console.log("change"); // 이벤트 작동하는지 꼭 검증하기

  const filtered = products.data.filter((product) => {
    return product.category === value;
  });
  console.log(filtered);

  removeItems(); //모든 상품 지운 후에 매칭되어진 값을 불러와야함.

  filtered.forEach((product) => {
    createItem(product);
  });
};

//오름차순정렬
const sortAsce = () => {
  const myProducts = products.data.sort((a, b) => {
    return a.price - b.price;
  });

  removeItems();

  myProducts.forEach((product) => {
    createItem(product);
  });
};
//내림차순 정렬
const sortDesc = () => {
  const myProducts = products.data.sort((a, b) => {
    return b.price - a.price;
  });

  removeItems();

  myProducts.forEach((product) => {
    createItem(product);
  });
};

const createItem = function (product) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const span = document.createElement("span");
  const div = document.createElement("div");
  const img = document.createElement("img");

  li.id = product.id;

  const attr = document.createAttribute("src");
  attr.value = product.img;
  img.setAttributeNode(attr);

  h3.className = "name";
  h3.innerText = product.name;
  //원화로 만들어주는 방법
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
    //예외조항 처리를 조건문으로 주었음. (돔요소 안에 아이디 값이 하나라도 존재하지 않는다면 진행시켜라)
    if (!document.getElementById(product.id)) {
      createItem(product);
    }
  });
};
// importData();
button.addEventListener("click", importData);
newlisting.addEventListener("click", sortNew);
asceButton.addEventListener("click", sortAsce);
descButton.addEventListener("click", sortDesc);
select.addEventListener("change", selectCategory);
