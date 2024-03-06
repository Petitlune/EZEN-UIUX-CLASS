const member1 = ["HTML", "CSS"];
const member2 = ["CSS", "Javascript", "React"];
const member3 = ["Javascript", "React", "Node.js", "Typescript"];

const subjects = [...member1, ...member2, ...member3];
console.log(subjects); //중복되는 값 하나로 만들어주고 싶음 ,

const resultList = new Set(); // subjects는 이터레이블 객체
//Set객체는 절대 중복되는 값을 받을 수 없다.
subjects.forEach((subject) => {
  resultList.add(subject);
});
console.log(resultList); //중복되는 값 하나로 만들어줌 => Set객체의 강점

const result = document.querySelector("#result");
result.innerHTML = `<ul>
${[...resultList].map((subject) => `<li>${subject}</li>`).join("")}
</ul>`;
//1) 배열의 값을 복제하는 전개연산자 구문
//2) map() : 새로운 배열을 만들고자 할 때 사용
//3) join(구분자): 배열의 데이터를 문자열로 변환
