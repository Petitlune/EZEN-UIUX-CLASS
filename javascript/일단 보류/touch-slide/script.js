document.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelector(".list");
  const items = document.querySelectorAll(".item");

  // Clone first and last items for infinite loop
  const firstClone = items[0].cloneNode(true);
  const lastClone = items[items.length - 1].cloneNode(true);

  list.appendChild(firstClone);
  list.insertBefore(lastClone, items[0]);

  let isDown = false;
  let startX;
  let scrollLeft;

  list.addEventListener("mousedown", (e) => {
    if (!e.target.classList.contains("image")) {
      isDown = true;
      startX = e.pageX - list.offsetLeft;
      scrollLeft = list.scrollLeft;
    }
  });
  list.addEventListener("mouseleave", () => {
    isDown = false;
  });
  list.addEventListener("mouseup", () => {
    isDown = false;
    checkLoop();
  });
  list.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - list.offsetLeft;
    const walk = (x - startX) * 3; // Adjust sensitivity here
    list.scrollLeft = scrollLeft - walk;
  });

  // For touch devices
  list.addEventListener("touchstart", (e) => {
    if (!e.target.classList.contains("image")) {
      isDown = true;
      startX = e.touches[0].pageX - list.offsetLeft;
      scrollLeft = list.scrollLeft;
    }
  });
  list.addEventListener("touchend", () => {
    isDown = false;
    checkLoop();
  });
  list.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - list.offsetLeft;
    const walk = (x - startX) * 3; // Adjust sensitivity here
    list.scrollLeft = scrollLeft - walk;
  });

  // Infinite loop check
  function checkLoop() {
    const itemWidth = items[0].offsetWidth;
    if (list.scrollLeft <= 0) {
      list.scrollLeft = (items.length - 1) * itemWidth;
    } else if (list.scrollLeft >= (items.length + 1) * itemWidth) {
      list.scrollLeft = itemWidth;
    }
  }
});
