// 사용자가 이메일 주소를 입력하면 result 공간에 사용자의 이메일 정보를 출력하게 해주세요.
// 단 이메일 주소 중 @ 앞의 내용을 세자리 까지만 출력하게 해주세요.
// 네번째 자리 부터는 ...온점으로 표기해 주세요.

//전제 조건 : 모든 이메일은 @ 존재,
//@라는 문자 중심으로 전 후로 쪼갠다. (split 사용)
// 앞쪽에서 쪼개진 문자열에서 1~3번 인덱스까지만 정상출력 (substring or slice 함수 사용)
// 뒤쪽 쪼개진 문자열은 그대로 보관하고 있다가 앞쪽 문자열과 합친다.

const userEmail = document.querySelector("#userEmail");
const form = document.querySelector("form");
const result = document.querySelector("#result");
const btn = document.querySelector("#submit");
console.log(userEmail, btn, result, form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // console.log("click"); // 확인하기
  let userName = "";
  let domain = "";
  //예외조항 처리
  if (userEmail.value !== "") {
    userName = userEmail.value.split("@")[0];
    userName = userName.substring(0, 3);
    domain = userEmail.value.split("@")[1];
    result.innerText = `${userName}...@ ${domain}`;
    userEmail.value = "";
  }
});

// btn.addEventListener("click", () => {
//   result.innerText = userEmail.value;
// });
