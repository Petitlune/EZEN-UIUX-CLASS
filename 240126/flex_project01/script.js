const btn = document.querySelector(".menu_toggle_btn");
const nav = document.querySelector(".nav");
console.log(btn);
console.log(nav);

btn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
