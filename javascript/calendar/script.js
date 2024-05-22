const nowDate = document.querySelector(".now");
const dayAll = document.querySelector(".days");
const buttons = document.querySelectorAll(".icons i");

const months = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const renderCalendar = () => {
  let firstDay = new Date(year, month, 1).getDay(); //1일의 요일
  let lastDate = new Date(year, month + 1, 0).getDate(); //현재달의 마지막 날짜
  let nextDay = new Date(year, month, lastDate).getDay(); // 현재달의 마지막 날짜의 요일
  let prevDate = new Date(year, month, 0).getDate(); //저번달의 마지막 날짜
  let day = "";
  console.log(nextDay);

  for (let i = firstDay; i > 0; i--) {
    day += `<li class="lastmonth-day">${prevDate - i + 1}</li>`;
  }
  for (let i = 1; i <= lastDate; i++) {
    let today =
      i === date.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? "active"
        : "";
    day += `<li class="${today}">${i}</li>`;
  }
  for (let i = nextDay; i < 6; i++) {
    day += `<li class="lastmonth-day">${i - nextDay + 1}</li>`;
  }
  nowDate.innerHTML = `<span>${year}년</span> ${months[month]}`;
  dayAll.innerHTML = day;
};

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    month = btn.id === "prev" ? month - 1 : month + 1;
    if (month < 0 || month > 11) {
      date = new Date(year, month);
      year = date.getFullYear();
      month = date.getMonth();
    } else {
      date = new Date();
    }
    renderCalendar();
  });
});
renderCalendar();
