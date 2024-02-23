const deletMenus = document.querySelectorAll("span");

for (let menu of deletMenus) {
  menu.addEventListener("click", function () {
    menu.parentNode.remove();
  });
}
// span 자체가 버튼이기 때문에 removeChild써줄 필요가 없음
