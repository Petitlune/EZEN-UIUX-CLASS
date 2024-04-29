//class 함수

// class Person1 {
//   name?: string;
//   age?: number;
// }

// let david = new Person1();
// david.name = "jack";
// david.age = 20;

// console.log(david);

// JS를 활용해서 생성할 수 있는 class형태의 FM문법
class Person3 {
  name: string;
  age?: number;

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}

let jack3: Person3 = new Person3("petit", 28);
// class를 생성할 때 반드시 필드값을 사전에 정의해야만 class를 만들 수 있는가?
// ==> 아니오.  접근 제어자(public)를 활용해서 field값을 생략할 수 있음.
// 위를 축약해서 사용한 것이 아래와 같다.
class Person2 {
  constructor(public name: string, public age?: number) {}
}
let Petit: Person2 = new Person2("petit", 29);

console.log(jack3);
