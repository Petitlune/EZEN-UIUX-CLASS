const formSubmit = document.querySelector(".formBox");
const twit = document.querySelector("#twitBtn");
const userText = document.querySelector("#userText");

userText.addEventListener("change", (e) => {
  const innerText = e.target.value;

  twit.addEventListener("click", () => {
    formSubmit.action = `https://twitter.com/intent/tweet?text=${innerText}`;
  });
});
