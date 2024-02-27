//MainPage Product Click Event
const mainProduct = document.querySelector(".common-product-hover");
const productList = document.querySelector(".common-product-hover-menu");
const header = document.querySelector("header");
//MainPage Brand Click Event
const mainbrand = document.querySelector(".common-brand-hover");
const brandList = document.querySelector(".common-brand-hover-menu");
const mainMake = document.querySelector(".common-makeup-hover");

mainProduct.addEventListener("mouseenter", () => {
  productList.classList.add("common-active-product");
  header.style.height = "464px";
  header.classList.remove("active");
  brandList.style.display = "none";
  productList.style.display = "flex";
});
productList.addEventListener("mouseleave", () => {
  productList.classList.remove("common-active-product");
  header.style.height = "100px";
});

// //MainPage Brand Click Event
// const mainbrand = document.querySelector(".brand-hover");
// const brandList = document.querySelector(".brand-hover-menu");

mainbrand.addEventListener("mouseenter", () => {
  brandList.classList.add("common-active-brand");
  brandList.style.display = "flex";
  header.style.height = "464px";
  header.classList.remove("active");
  productList.style.display = "none";
});
brandList.addEventListener("mouseleave", () => {
  brandList.classList.remove("common-active-brand");
  header.style.height = "100px";
});

mainMake.addEventListener("mouseenter", () => {
  mainMake.classList.add("common-makeup-active");
  brandList.classList.remove("common-active-brand");
});
mainMake.addEventListener("mouseleave", () => {
  mainMake.classList.remove("common-makeup-active");
  header.style.height = "100px";
});

//MainPage Search Click Event
const searchClickClose = document.querySelector(".common-search-click-icon i");
const searchContent = document.querySelector(".common-search-click");
const searchClickOpen = document.querySelector(".common-search-btn i ");
console.log(searchContent);
searchClickOpen.onclick = () => {
  searchContent.classList.add("common-active-searchContent");
};

searchClickClose.onclick = () => {
  searchContent.classList.remove("common-active-searchContent");
};

//MainPage tigger Click Event
const mainTrigger = document.querySelector(".common-toggle-btn");
const mainGnb = document.querySelector(".common-toggle-btn-click");

mainTrigger.addEventListener("click", () => {
  mainTrigger.classList.toggle("active");
  if (mainGnb.style.display === "none" || mainGnb.style.display === "") {
    mainGnb.style.display = "block";
    window.removeEventListener("scroll", scrollHead);
  } else {
    mainGnb.style.display = "none";
    window.addEventListener("scroll", scrollHead);
  }
});
//MainPage Store Brand
const brandStore = document.querySelector(".common-brand-store-select");
const brandStoreMenu = document.querySelector(".common-brand-store-select p");
const brandStoreIcon = document.querySelector(".common-brand-store-select i");
const brandStoreList = document.querySelector(".common-store-list");

brandStore.addEventListener("click", () => {
  brandStore.classList.toggle("common-active-store-list");
  brandStoreList.classList.toggle("common-active-store-list");
  brandStoreMenu.classList.toggle("common-active-store-list");
  brandStoreIcon.classList.toggle("common-active-store-list");
});

//gototop

const gototopBtn = document.querySelector("#common-gototop");

const scrollHead = () => {
  if (window.scrollY > 0) {
    gototopBtn.classList.add("active");
    header.classList.add("active");
  } else {
    gototopBtn.classList.remove("active");
    header.classList.remove("active");
  }
};

if ((mainGnb.style.display = "none")) {
  window.addEventListener("scroll", scrollHead);
} else {
  window.removeEventListener("scroll", scrollHead);
}

gototopBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: header, behavior: "smooth" });
});
