const popupBtn = document.querySelector("button");
console.log(popupBtn);
const popupWidth = 600;
const popupHeight = 500;
popupBtn.addEventListener("click", () => {
  const left = (window.screen.availWidth - popupWidth) / 2;
  const top = (window.screen.availHeight - popupHeight) / 2;
  window.open(
    "index.html",
    "event",
    `width = ${popupWidth} - letf,  height = ${popupHeight} - top `
  );
});
