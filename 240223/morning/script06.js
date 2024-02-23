// const tsNode = document.createElement("p");
// const tsTextNode = document.createTextNode("Typescript");

// tsNode.appendChild(tsTextNode);

// document.body.insertBefore(tsNode, basisNode);
// //typescript가 맨 앞줄에 오게 만들고 싶다!!!
// const basisNode = document.querySelectorAll("p")[0];
// console.log(basisNode);

//제거하기
// const heading = document.querySelector("h1");
// const parentH1 = heading.parentNode;
// console.log(parentH1);
// heading.addEventListener("click", () => {
//   heading.remove();
// });

//클릭한 이벤트의 부모를 찾아와야함!!!!!!!
// heading.remove(); - 그냥 제거히는 방법

const items = document.querySelectorAll("li");
console.log(items);

// 여기서 li태그를 this라는 객체로 대체해서 사용할 수 있음, 단! 기존에 클래스 함수를 사용할 때에만 가능 => 화살표 함수를 사용할 때에는 this 객체사 이벤트를 실행시키는 당사자=주체 가 되는 것이 아니라 window 객체가 this가 된다.
for (let item of items) {
  item.addEventListener("click", function () {
    this.parentNode.removeChild(this);
    //해당태그에 부모요소를 찾고(parentNode) 해당 태그의 자식요소까지 같이 제거해라(removeChild)
  });
}
