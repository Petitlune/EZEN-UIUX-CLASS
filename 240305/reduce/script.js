import products from "./product.js";
//모듈 => 레고의 완성품을 조립하고자 할 때 개별요소를 블록
//자바스크립트 언어를 만들고 관리하고 있는 ES 기관에서는 모듈을 표준화하지 않았다.

const button = document.querySelector(".container > button");
const newlisting = document.querySelector(".newlisting");
const asceButton = document.querySelector(".ascending");
const descButton = document.querySelector(".descending");
const select = document.querySelector("select");

let selected = [];

//최신 출시순 정렬
const removeItems = () => {
  const items = document.querySelectorAll("li");
  items.forEach((item) => {
    item.remove();
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

const sortNew = () => {
  const myProducts = products.data.sort((a, b) => {
    return a.id - b.id;
  });

  removeItems();

  myProducts.forEach((product) => {
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
//================이부분이 추가됨 =====================

const updateTotal = (price) => {
  const totalPrice = document.querySelector(".total-price");
  const formatted = new Intl.NumberFormat("ko-kr", {
    style: "currency",
    currency: "KRW",
  }).format(price);
  totalPrice.innerText = formatted;
};
const calculate = () => {
  const result = selected.reduce((acc, current) => {
    return acc + current.price;
  }, 0);
  console.log(result);

  updateTotal(result);
};
const addCart = (e) => {
  // console.log(e);
  // console.log("change");
  const id = e.target.parentElement.parentElement.id;
  const checked = e.target.checked;
  console.log(typeof id);
  // console.log(id, checked);
  if (checked) {
    products.data.forEach((product) => {
      //형변환 중요
      if (product.id === parseInt(id)) {
        //push로 배열에 값 넣어주기
        selected.push(product);
        console.log(selected);
      }
    });
  } else {
    selected = selected.filter((product) => {
      return product.id !== parseInt(id);
    });
  }
  calculate();
};

const createItem = function (product) {
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const span = document.createElement("span");
  const div = document.createElement("div");
  const img = document.createElement("img");
  //================이부분이 추가됨 =====================
  const check = document.createElement("input");

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

  //================이부분이 추가됨 =====================
  check.setAttribute("type", "checkbox");
  check.addEventListener("change", addCart);
  //================이부분이 추가됨 =====================
  div.append(check, h3, span);
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

button.addEventListener("click", importData);
newlisting.addEventListener("click", sortNew);
asceButton.addEventListener("click", sortAsce);
descButton.addEventListener("click", sortDesc);
select.addEventListener("change", selectCategory);