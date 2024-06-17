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
let nowDay = date.getDate();

const renderCalendar = () => {
  let firstDay = new Date(year, month, 1).getDay(); //1일의 요일
  let lastDate = new Date(year, month + 1, 0).getDate(); //현재달의 마지막 날짜
  let nextDay = new Date(year, month, lastDate).getDay(); // 현재달의 마지막 날짜의 요일
  let prevDate = new Date(year, month, 0).getDate(); //저번달의 마지막 날짜
  let day = "";

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

//생일 카운트다운

const birMonth = document.querySelector("#user-month");
const birDay = document.querySelector("#user-day");
const birBtn = document.querySelector("button");
const DAYS = document.querySelector(".DAYS");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const congratulation = document.querySelector(".congratulation");
let onlyNumMonth;
let onlyNumDay;
let birthday;
let count;

const countStart = () => {
  congratulation.classList.remove("active");
  year = date.getFullYear();
  count = setInterval(() => {
    let now = new Date().getTime();
    let countDown = new Date(birthday).getTime();
    let distance = countDown - now;

    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / 1000);

    DAYS.innerText = d;
    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;

    if (distance < 0) {
      clearInterval(count);
      DAYS.innerText = "0";
      hours.innerText = "0";
      minutes.innerText = "0";
      seconds.innerText = "0";
      congratulation.classList.add("active");
    }
  }, 1000);
};

birBtn.addEventListener("click", () => {
  if (count) {
    clearInterval(count);
  }
  let userMonth = birMonth.value;
  let userDay = birDay.value;

  if (
    userMonth < 1 ||
    userMonth > 12 ||
    userDay < 1 ||
    userDay > 31 ||
    !userMonth ||
    !userDay
  ) {
    return;
  }

  onlyNumMonth = parseInt(userMonth.replace(/[^0-9]/g, ""));
  onlyNumDay = parseInt(userDay.replace(/[^0-9]/g, ""));

  if (
    onlyNumMonth < month + 1 ||
    (onlyNumMonth === month + 1 && onlyNumDay < nowDay)
  ) {
    year += 1;
  }
  birthday = `${onlyNumMonth}/${onlyNumDay}/${year} 00:00:00`;

  countStart();
});
