const tabBtns = document.querySelectorAll(".tab-btn a");
console.log(tabBtns);

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((it) => {
      it.classList.remove("active");
    });
    btn.classList.add("active");
  });
});
