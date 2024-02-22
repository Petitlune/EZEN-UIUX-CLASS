const elemnets = document.querySelectorAll("*"); //html 안에 모든 태그 요소를 잡아온다. 전체 선택자(= * ) 사용
console.log(elemnets);
for (let element of elemnets) {
  element.addEventListener("click", (e) => {
    console.log(
      `e.target : ${e.target.tagName}, e.currentTarget : ${e.currentTarget.tagName}`
    );
  });
}
// 이벤트 버블링으로 인해서 선택한 부분의 윗쪽까지 이벤트가 먹힌다. 이벤트 버블링 효과 이해하기!!!
// target과 currentTarget의 차이를 알아야한다.
