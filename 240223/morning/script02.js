//새로운 노드를 만들기 createElement
//html에서 태그 = js에서 노드(태그 안에 담겨저 있는 속성도  노드라고 한다./ 태그도 노드 속성도 노드)
const newP = document.createElement("p");
console.log(newP);
//p태그 노드 생성
const textNode = document.createTextNode("Typescript");
console.log(textNode);
//Typescript라는 문자열의 텍스트노드 생성
newP.appendChild(textNode);
//Typescript라는 문자열을 생성된 p태그 노드에 자식요소로 넣어줌.

document.body.appendChild(newP);
