//JS : 반복문을 사용할 수 있는 객체 => iterable 객체 (iterator 속성이 존재해야함.)
//참조타입 자료: 객체 & 배열 이 대표적인 iterable 객체
// 객체 & 배열 아닌데 반복문 사용하고 싶으면 generator() 사용해야한다.

const numArray: number[] = [1, 2, 3];

for (let value of numArray) {
  console.log(value);
}

// generator() => iterable 객체
// next()
