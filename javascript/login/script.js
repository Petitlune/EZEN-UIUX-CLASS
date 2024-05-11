const idInput = document.querySelector("#correctId");
const pwInput = document.querySelector("#correctPw");
const pwReInput = document.querySelector("#matchPw");
const emailInput = document.querySelector("#correctEmail");
const phoneInput = document.querySelector(".phoneNum");
const idBox = document.querySelector(".id-box td");
const pwBox = document.querySelector(".password-box td");
const matchPwBox = document.querySelector(".matchPw-box td");
const userName = document.querySelector("#userName");
const emailBox = document.querySelector(".email-box td");
const numCheckBox = document.querySelector(".num-check-box");
const userNum = document.querySelector("#userNum");
const numCheckBoxBtn = document.querySelector(".num-check-box button");
const wrongMessage = document.createElement("p");
const matchPhoneNum = document.querySelector(".matching-num");
const idDuplBtn = document.querySelector(".id-dupl");
const emailDuplBtn = document.querySelector(".email-dupl");
const phoneBtn = document.querySelector(".matching-num");
const addressBtn = document.querySelector(".address");
const timer = document.querySelector(".timer");
const genderSelect = document.querySelectorAll(".gender-select input");
const birthday = document.querySelector(".birthday");
const year = document.querySelector("#year");
const month = document.querySelector("#month");
const day = document.querySelector("#day");

const friendId = document.querySelector("#friend-id");
const eventName = document.querySelector("#event-name");
const friendIdBox = document.querySelector(".friend-id-box");
const eventBox = document.querySelector(".event-name-box");
const friendIdBoxInput = document.querySelector(".friend-id-box input");
const friendIdBoxBtn = document.querySelector(".friend-id-box button");
const agreeAll = document.querySelector("#agreeAll");
const termsAgree = document.querySelector("#termsAgree");
const personalAgree = document.querySelector("#personalAgree");
const saleAgree = document.querySelector("#saleAgree");
const ageAgree = document.querySelector("#ageAgree");

//아이디 길이제어
let idValid = false;
idInput.addEventListener("input", (e) => {
  if (e.target.value.length === 0) {
    wrongMessage.innerHTML = "";
    idValid = false;
  } else if (e.target.value.length <= 5 || e.target.value.length >= 17) {
    wrongMessage.className = "warning";
    idBox.appendChild(wrongMessage);
    wrongMessage.innerText =
      " 6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합";
    idValid = false;
  } else {
    wrongMessage.innerHTML = "";
    idValid = true;
  }
});

//한글 입력제어
const onlyEn = (e) => {
  e.value = e.value.replace(/[^A-Za-z0-9]/gi, "");
};

idDuplBtn.addEventListener("click", () => {
  if (idValid === true) {
    alert("사용 가능한 아이디입니다.");
  } else {
    alert("아이디를 확인해주세요.");
  }
});

//비밀번호
let pwVal = "";
let isPwValid = false;
const pwRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;

pwInput.addEventListener("input", (e) => {
  pwVal = e.target.value;
  if (e.target.value.length === 0) {
    isPwValid = false;
    wrongMessage.innerHTML = "";
  } else if (!pwRegExp.test(pwVal)) {
    isPwValid = false;
    wrongMessage.className = "warning";
    pwBox.appendChild(wrongMessage);
    wrongMessage.innerText = "8~20자의 영문, 숫자, 특수문자를 모두 포함";
  } else {
    isPwValid = true;
    wrongMessage.innerHTML = "";
  }
});

//비밀번호재확인
let rePwValid = false;

pwReInput.addEventListener("input", (e) => {
  if (e.target.value.length === 0) {
    wrongMessage.innerHTML = "";
  } else if (e.target.value !== pwVal) {
    rePwValid = false;
    wrongMessage.className = "warning";
    matchPwBox.appendChild(wrongMessage);
    wrongMessage.innerText = "비밀번호가 일치하지 않습니다.";
  } else {
    rePwValid = true;
    wrongMessage.innerHTML = "";
  }
});
let isNameValid = false;
userName.addEventListener("input", (e) => {
  if (e.target.value !== "") {
    isNameValid = true;
  } else isNameValid = false;
});

//이메일
let emailVal = "";
let isMailValid = false;
const emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
emailInput.addEventListener("input", (e) => {
  emailVal = e.target.value;
  if (e.target.value.length === 0) {
    wrongMessage.innerHTML = "";
    isMailValid = false;
  } else if (!emailRegExp.test(emailVal)) {
    wrongMessage.className = "warning";
    emailBox.appendChild(wrongMessage);
    wrongMessage.innerText = "이메일 형식이 올바르지 않습니다.";
    isMailValid = false;
  } else {
    wrongMessage.innerHTML = "";
    isMailValid = true;
  }
});

emailDuplBtn.addEventListener("click", () => {
  if (isMailValid === true) {
    alert("사용 가능한 이메일입니다.");
  } else {
    alert("이메일을 확인해주세요.");
  }
});

//휴대폰번호 숫자만 입력
isPhoneValid = false;
const onlyNum = (e) => {
  e.value = e.value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
};

phoneNum.addEventListener("input", (e) => {
  if (e.target.value.length === 0) {
    matchPhoneNum.classList.remove("active");
    isPhoneValid = false;
  } else if (e.target.value.length >= 10) {
    matchPhoneNum.classList.add("active");
    isPhoneValid = true;
  } else {
    matchPhoneNum.classList.remove("active");
    isPhoneValid = false;
  }
});

//인증번호 버튼
phoneBtn.addEventListener("click", () => {
  if (isPhoneValid === true) {
    start();
    alert("인증번호가 발송되었습니다.");
    numCheckBox.classList.add("active");
  }
});

let countDown = 180;
let time = 0;

const clock = () => {
  if (countDown > -1) {
    let min = Math.floor(countDown / 60);
    let sec = String(countDown % 60).padStart(2, "0");
    countDown = countDown - 1;
    timer.innerText = `${min} : ${sec}`;
  } else if (countDown == -1) {
    alert("입력시간을 초과하였습니다.");
    clearInterval(time);
    numCheckBox.classList.remove("active");
  }
};
const start = () => {
  clearInterval(time);
  time = setInterval(clock, 1000);
};
numCheckBoxBtn.addEventListener("click", (e) => {
  if (userNum.value == "1234") {
    alert("인증되었습니다.");
    timer.innerText = "인증성공";
    clearInterval(time);
  } else {
    alert("인증번호가 맞지 않습니다.");
  }
});

//주소

isAddrValid = false;
addressBtn.addEventListener("click", (e) => {
  new daum.Postcode({
    oncomplete: function (data) {
      let addr = "";
      if (data.userSelectedType === "R") {
        addr = data.roadAddress;
      } else {
        addr = data.jibunAddress;
      }
      document.getElementById("userAddrInput").value = addr;
    },
  }).open();
  isAddrValid = true;
});

//생년월일

year.addEventListener("input", (e) => {
  if (e.target.value.length === 0) {
    wrongMessage.innerHTML = "";
  } else if (e.target.value.length === 4) {
    wrongMessage.innerHTML = "";
  } else {
    wrongMessage.className = "warning";
    birthday.appendChild(wrongMessage);
    wrongMessage.innerText = "태어난 년도 4자리를 정확하게 입력해주세요.";
  }
});
month.addEventListener("input", (e) => {
  if (e.target.value.length === 0) {
    wrongMessage.innerHTML = "";
  } else if (e.target.value <= 0 || e.target.value > 12) {
    wrongMessage.className = "warning";
    birthday.appendChild(wrongMessage);
    wrongMessage.innerText = "태어난 월을 정확하게 입력해주세요.";
  } else {
    wrongMessage.innerHTML = "";
  }
});
day.addEventListener("input", (e) => {
  if (e.target.value.length === 0) {
    wrongMessage.innerHTML = "";
  } else if (e.target.value <= 0 || e.target.value > 31) {
    wrongMessage.className = "warning";
    birthday.appendChild(wrongMessage);
    wrongMessage.innerText = "태어난 일을 정확하게 입력해주세요.";
  } else {
    wrongMessage.innerHTML = "";
  }
});

//추천코드 등록
friendId.addEventListener("click", (e) => {
  if (e.currentTarget.checked === true) {
    friendIdBox.style.display = "block";
    eventBox.style.display = "none";
  }
});
eventName.addEventListener("click", (e) => {
  if (e.currentTarget.checked === true) {
    eventBox.style.display = "block";
    friendIdBox.style.display = "none";
  }
});
friendIdBoxBtn.addEventListener("click", () => {
  alert(`${friendIdBoxInput.value}을(를) 추천인으로 등록하였습니다.`);
});

//이용약관 동의
agreeAll.addEventListener("click", (e) => {
  const checkAll = e.currentTarget.checked;
  termsAgree.checked = checkAll;
  personalAgree.checked = checkAll;
  saleAgree.checked = checkAll;
  ageAgree.checked = checkAll;
});

termsAgree.addEventListener("click", (e) => {
  if (e.currentTarget.checked === false) {
    agreeAll.checked = false;
  }
});
personalAgree.addEventListener("click", (e) => {
  if (e.currentTarget.checked === false) {
    agreeAll.checked = false;
  }
});
saleAgree.addEventListener("click", (e) => {
  if (e.currentTarget.checked === false) {
    agreeAll.checked = false;
  }
});
ageAgree.addEventListener("click", (e) => {
  if (e.currentTarget.checked === false) {
    agreeAll.checked = false;
  }
});

const essentials = document.querySelectorAll(".essential");
console.log(essentials);
const signSuccess = document.querySelector(".id-modal");
const signInCheckBtn = signSuccess.querySelector("button");

const signIn = document.querySelector(".sign-in");

signIn.addEventListener("click", () => {
  console.log(
    idValid,
    isPwValid,
    rePwValid,
    isNameValid,
    isMailValid,
    isPhoneValid,
    isAddrValid,
    termsAgree.checked,
    personalAgree.checked
  );
  if (
    idValid === true &&
    isPwValid === true &&
    rePwValid === true &&
    isNameValid === true &&
    isMailValid === true &&
    isPhoneValid === true &&
    isAddrValid === true &&
    termsAgree.checked === true &&
    personalAgree.checked === true &&
    ageAgree.checked === true
  ) {
    signSuccess.style.display = "flex";
  } else if (idValid === false) {
    alert("아이디를 확인해주세요");
  } else if (isPwValid === false || rePwValid === false) {
    alert("비밀번호를 확인해주세요");
  } else if (isNameValid === false) {
    alert("이름을 입력해주세요");
  } else if (isMailValid === false) {
    alert("이메일을 확인해주세요");
  } else if (isPhoneValid === false) {
    alert("전화번호를 확인해주세요");
  } else if (isAddrValid === false) {
    alert("주소를 확인해주세요");
  } else if (
    termsAgree.checked === false ||
    personalAgree.checked === false ||
    ageAgree.checked === false
  ) {
    alert("필수 약관에 동의해주세요.");
  } else {
    signSuccess.style.display = "none";
  }
});
signInCheckBtn.addEventListener("click", () => {
  signSuccess.style.display = "none";
});
