const order = new Promise((resolve, reject) => {
  const coffee = prompt("어떤 커피를 주문하시겠습니까?", "ex)아메리카노");
  if (coffee != null && coffee != "") {
    document.querySelector(".start").innerText = `${coffee} 주문 접수`;
    setTimeout(() => {
      resolve(coffee);
    }, 3000);
  } else {
    reject("커피를 주문하지 않았습니다.");
  }
});
//위는 그렇게 하겠다고 약속만 한것이고 밑에처럼 then과 catch를 써주어야 실제로 실행된다.

const display = (result) => {
  document.querySelector(".end").innerText = `${result} 준비 완료!`;
  document.querySelector(".end").classList.add("active");
  document.querySelector(".start").classList.add("done");
};

const showErr = (err) => {
  document.querySelector(".start").innerText = `${err}`;
};

order.then(display).catch(showErr);
