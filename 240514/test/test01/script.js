const formSubmit = document.querySelector(".formBox");
const twit = document.querySelector("#twitBtn");
const userText = document.querySelector("#userText");

userText.addEventListener("change", (e) => {
  const innerText = e.target.value;
  const encodedText = encodeURIComponent(innerText); // 오류가 안나도록 인코딩

  twit.addEventListener("click", () => {
    formSubmit.action = `https://twitter.com/intent/tweet?text=${encodedText}`;
  });
});
