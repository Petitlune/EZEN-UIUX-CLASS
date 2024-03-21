const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const seed = document.querySelector("#seed");
  const total = document.querySelector("#total");
  const result = document.querySelector("#result");
  //값이 중복되면 안됨. set함수 이용
  let winner = new Set();
  for (let i = 0; i < total.value; i++) {
    let picked = Math.floor(Math.random() * seed.value + 1);
    winner.add(`${picked}번, `);
  }
  //같은 숫자가 골라졌을 때는 5 6개 등등 나올 수 있기 때문에 조건문으로 예외조항처리 해줌.
  if (winner.size !== total.value) {
    for (let i = 0; i < total.value; i++) {
      let picked = Math.floor(Math.random() * seed.value + 1);
      winner.add(`${picked}번, `);
    }
  } else {
    result.innerText = `당첨자 : ${Array.from(winner).join("")}`;
  }
  // result.innerText = `당첨자 : ${Array.from(winner).join("")}`;
});
