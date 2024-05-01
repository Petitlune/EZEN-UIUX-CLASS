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
  searchBox.value === "";
  console.log(searchBox.value);
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
  searchBox.addEventListener("input", (e) => {
    const input = e.target.value.trim().toLowerCase();
    const searchText = text.innerText.toLowerCase();
    if (input === "") {
      text.style.color = "#ffa500";
    } else if (searchText.includes(input)) {
      text.style.color = "#000";
    } else {
      text.style.color = "#ffa500";
    }
  });
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchBox.value = "";
    text.style.color = "";
  });
  closeBtn.addEventListener("click", () => {
    searchBox.value = "";
    text.style.color = "";
  });
});
