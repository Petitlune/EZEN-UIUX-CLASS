//react.js에서 자주 사용되는 javascript주요 문법

// 1. 객체 줄임 표기법

const name = "Petit";
const age = 20;

//키값과 변수명이 같은 경우 value 생략가능함.
const person = {
  name,
  age,
};

// 2. 구조분해할당
const teacher = {
  name02: "David",
  age02: 43,
};
//구조분해할당 하지 않았을 때
// const name02 = teacher.name02;
// const age02 = teacher.age02;

//=>구조분해 할당
// 1) 자료형태 먼저 분석(위의 경우 객체) 2)객체의 키name과 무조건 일치해야한다!
const { name02, age02 } = teacher;

// 3. 전개연산자 구문 = 배열 값을 그대로 깊은 복사하고 싶을 때 사용.

const arr = [1, 2, 3, 4];

const [a, b, ...rest] = arr;

// 4. 복사 type (얕은 복사, 깊은 복사(feat.참조타입 자료))

const boy = {
  name03: "jjong",
  age: 35,
};

const person02 = boy;
const person03 = { ...boy };

console.log(boy == person02); //true
console.log(boy == person03); //false => 원본데이터 값은 유지한 상태에서 복사해온 것. 외형은 같지만 실제는 다른 것이다. => 깊은 복사로 가져왔다고 할 수 있다. ()

// 5. 삼항 조건 연산자

const coffee = null;
// 조건식 ? 조건식이 참일때 출력물 : 조건식이 거짓일때 출력물
console.log(coffee ? coffee.name : "there in no coffee");

// 조건부 렌더링 && 단락회로 평가
const coffeeMenu = {
  name: "americano",
  price: 2000,
};

if (coffeeMenu) {
  console.log(coffeeMenu.name);
} else {
  console.log("there in no coffee");
}
// 단락회로 평가 : 먼저 오는 항이 참이면 나중에 오는 항이 실행된다는 전제조건을 걸어주는 것.
const result = coffeeMenu.name && coffeeMenu.price;
//const result = coffee?.price; 이렇게도 표현한다.
console.log(result);
