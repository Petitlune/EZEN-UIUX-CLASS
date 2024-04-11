const container = document.querySelector(".container");
const createList = document.querySelector(".createList");
const cateMenuBtn = document.querySelectorAll(".category-menu span");

// 상품 List DOM 생성

const renderdata = (data) => {
  data.forEach((item) => {
    const list = document.createElement("li");
    const menuImg = document.createElement("img");
    const tit = document.createElement("div");
    const price = document.createElement("div");
    const priceKR = item.price.toLocaleString("ko-KR");

    tit.className = "title";
    price.className = "price";
    menuImg.src = item.image;
    tit.innerText = item.product;
    price.innerText = `${priceKR} 원`;

    list.append(menuImg, tit, price);
    createList.appendChild(list);
  });
};

let menuList;

fetch("./list.json")
  .then((response) => response.json())
  .then((data) => {
    menuList = data.items;

    renderdata(menuList);

    const healthData = menuList.filter((item) => {
      return item.category === "보양죽";
    });
    const specialData = menuList.filter((item) => {
      return item.category === "별미죽";
    });
    const traditionalData = menuList.filter((item) => {
      return item.category === "전통죽";
    });
    const drinkData = menuList.filter((item) => {
      return item.category === "음료";
    });
    /// 카테고리별 상품 리스트 정렬
    cateMenuBtn.forEach((button, i) => {
      button.addEventListener("click", () => {
        cateMenuBtn.forEach((button) => {
          button.classList.remove("active");
        });
        button.classList.add("active");
        createList.innerHTML = "";
        switch (i) {
          case 0:
            renderdata(menuList);
            break;
          case 1:
            renderdata(healthData);
            break;
          case 2:
            renderdata(specialData);
            break;
          case 3:
            renderdata(traditionalData);
            break;
          case 4:
            renderdata(drinkData);
            break;
        }
      });
    });
  });