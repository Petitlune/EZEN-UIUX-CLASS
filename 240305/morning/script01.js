//react => 구조 분해 할당
const fruits = ["사과", "복숭아"];

// const apple = fruits[0];
// const peach = fruits[1];

const [apple, peach] = fruits;
// const [apple, peach] = ["사과", "복숭아"];
console.log(apple, peach);

const [teacher, ...students] = ["park", "kim", "choi", "lee"];
console.log(teacher, students);

//객체의 구조 분해 할당
const member = {
  name: "lee",
  age: "32",
};
const { name, age } = member;
// const { name: userName, age } = member; - 구조 분해 할당 이후에 변수명 바꾸고 싶을때 사용

console.log(name, age);
//객체의 구조 분해 할당에서는 유의사항이 존재 => 구조 분해 할당 값을 전달받을 변수이름 = 객체의 key명과 동일해야 함. 위에서 neme 과 username은 다름 따라서 name으로 받아야함.

//중첩 객체에서 구조분해할당 하는 방법
const childs = {
  names: "슛돌이",
  score: {
    history: 85,
    science: 64,
  },
  friends: ["kim", "lee", "park"],
};

const {
  names,
  score: { history, science },
  friends: [f1, f2, f3],
} = childs;

console.log(history, f2);
