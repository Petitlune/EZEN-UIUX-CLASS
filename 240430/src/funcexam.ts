// 함수
// 왜? 어떻게 사용? => 어떤 값을 받아서 어떤 연산 및 기능작업을 거쳐서 어떤 값을 반환하려고
// 매개변수 타입 => 변수
// 반환값 타입

// 기본적인 함수형태 (함수의 타입을 정의하는 FM문법)
function add(a: number, b: number): number {
  return a + b;
}

// 익명함수 형태
const add1 = function (a: number, b: number): number {
  return a + b;
};

// 화살표함수 형태 => ES6이후 JS문법
// 이벤트리스너에서는 화살표함수를 사용했을 때 this객체가 가리키는 것이 이벤트 대상이 아니라 window이기 때문에 기본형함수를 사용해주어야함.
const add2 = (a: number, b: number): number => {
  return a + b;
};

//반환값이 없는 함수는 결과값으로 어떤 타입을 정의해야할까?
// void : 함수안에서 반환값을 갖지 않고 있는 함수의 최종타입을 정의하고자 할때

function printMe(name: string, age: number): void {
  console.log(`name: ${name}, age: ${age}`);
}

//타입시그니처

interface Product {
  name: string;
  price: number;
}

// const goods: Product = {
//   name: "색연필",
//   price: 2000,
// };

const goods: {
  name: string;
  price: number;
} = {
  name: "색연필",
  price: 2000,
};

//함수에 타입시크니처 형태로 주석 주기
const printMe01: (arg0: string, arg1: number) => void = function (name, price) {
  console.log(`$name}은 ${price}원입니다.`);
};
