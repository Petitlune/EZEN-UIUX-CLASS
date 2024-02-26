//MainPage Product Click Event
const mainProduct = document.querySelector(".product-hover");
const productList = document.querySelector(".product-hover-menu");
const header = document.querySelector("header");
//MainPage Brand Click Event
const mainbrand = document.querySelector(".brand-hover");
const brandList = document.querySelector(".brand-hover-menu");

mainProduct.addEventListener("mouseenter", () => {
  productList.classList.add("active-product");
  header.style.height = "464px";
  brandList.style.display = "none";
  productList.style.display = "flex";
});
productList.addEventListener("mouseleave", () => {
  productList.classList.remove("active-product");
  header.style.height = "100px";
});

// //MainPage Brand Click Event
// const mainbrand = document.querySelector(".brand-hover");
// const brandList = document.querySelector(".brand-hover-menu");

mainbrand.addEventListener("mouseenter", () => {
  brandList.classList.add("active-brand");
  brandList.style.display = "flex";
  header.style.height = "464px";
  productList.style.display = "none";
});
brandList.addEventListener("mouseleave", () => {
  brandList.classList.remove("active-brand");
  header.style.height = "100px";
  // brandList.style.display = "none";
});
//MainPage Search Click Event
const searchClickClose = document.querySelector(".search-click-icon i");
const searchContent = document.querySelector(".search-click");
const searchClickOpen = document.querySelector(".search-btn i ");
console.log(searchContent);
searchClickOpen.onclick = () => {
  searchContent.classList.add("active-searchContent");
};

searchClickClose.onclick = () => {
  searchContent.classList.remove("active-searchContent");
};

//MainPage tigger Click Event
const mainTrigger = document.querySelector(".toggle-btn");
const mainGnb = document.querySelector(".toggle-btn-click");

mainTrigger.addEventListener("click", () => {
  mainTrigger.classList.toggle("active");
  if (mainGnb.style.display === "none" || mainGnb.style.display === "") {
    mainGnb.style.display = "block";
  } else {
    mainGnb.style.display = "none";
  }
});
//MainPage Store Brand
const brandStore = document.querySelector(".brand-store-select");
const brandStoreMenu = document.querySelector(".brand-store-select p");
const brandStoreIcon = document.querySelector(".brand-store-select i");
const brandStoreList = document.querySelector(".store-list");

brandStore.addEventListener("click", () => {
  brandStore.classList.toggle("active-store-list");
  brandStoreList.classList.toggle("active-store-list");
  brandStoreMenu.classList.toggle("active-store-list");
  brandStoreIcon.classList.toggle("active-store-list");
});
//gototop

const gototopBtn = document.querySelector("#gototop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    gototopBtn.classList.add("active");
  } else {
    gototopBtn.classList.remove("active");
  }
});

gototopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: header, behavior: "smooth" });
});
