const searchBtn = document.querySelector("nav i");
const modalBox = document.querySelector(".modal-search");
const closeBtn = document.querySelector(".fa-x");
const searchBox = document.querySelector('input[type="search"]');
const submitBtn = document.querySelector('input[type="submit"]');
const hashTag = document.querySelector(".hash-tag");
const tagText = document.querySelectorAll(".tag-text");
console.log(searchBox.innerText);

searchBtn.addEventListener("click", () => {
  modalBox.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  modalBox.classList.remove("active");
});

searchBox.addEventListener("focus", function () {
  const element = this.parentElement.parentElement.nextElementSibling;
  element.style.opacity = 1;
});
searchBox.addEventListener("blur", function () {
  const element = this.parentElement.parentElement.nextElementSibling;
  element.style.opacity = 0;
});

//커스터 마이징
tagText.forEach((text) => {
  text.addEventListener("click", (e) => {
    const str = e.target.innerText;
    const selectStr = str.substr(1);
    searchBox.value = selectStr;
  });
});

const matchText = hashTag.innerText.split("");

searchBox.addEventListener("input", (e) => {
  matchText.forEach((textElement) => {
    console.log(textElement);
    if (textElement.textContent === e.target.value) {
      textElement.style.color = "#f00";
    } else {
      textElement.style.color = "";
    }
  });
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchBox.value = "";
});
