//Ts 기본개념!!!

import { Interface } from "readline";
import { StringLiteral } from "typescript";

// 1) 타입별칭(변수를 생성하듯이 간편하게 사용하고자 할때 쓴다.)
// => 함수 혹은 객체 등의 요소를 생성할 때, 시그니처 형식으로 타입을 정의하고자 할 때 간단하게 생성!
type User = {
  id: number;
  name: string;
  nick: string;
  birth: number;
  bio: string;
  location: string;
};

const user: User = {
  id: 1,
  name: "김이슬",
  nick: "Petit",
  birth: 1996,
  bio: "하이",
  location: "부천시",
};
const user1: User = {
  id: 2,
  name: "종현",
  nick: "JJong",
  birth: 1990,
  bio: "쁘띠",
  location: "혜화",
};
//타입별칭 사용의 원래 목적은?
type IContryCodes = {
  // korea: string;
  // UnitedState: string;
  // Brazil: string;
  [key: string]: string;
  //앞으로 추가될 요소의 타입의 형식도 동일한 패턴을 가진다고 예상될 때 타입별칭을 사용한다.
};

//=> 아래는 최초로 정의된 객체의 모습
const CountryCodes = {
  korea: "ko",
  UnitedState: "Us",
  Brazil: "Bz",
};

//type 별칭 VS Interface
// 1) Interface 상속: extends
// => 객체지향언어 : class

let num1: number = 10;
//타입 리터럴
let num2: 10 = 10;

num1 = num2;
//num2 =num1 은 불가능

interface Animal {
  name: string;
  color: string;
}

interface Dog {
  name: string;
  color: string;
  breed: string;
}

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "뽀삐",
  color: "brown",
  breed: "진도",
};

// 슈퍼타입 => 많은 값을 가지고 있다는 의미가 아니라 다양한 상태를 수용할 수 있어야 한다.
//따라서 Animal이 Dog보다 슈퍼타입!

animal = dog;
// dog = animal;

//초과프로퍼티 검사
// Union 타입: 합집합
// interface의 경우는 하나의 프로젝트 파일 내 동일한 이름을 갖고 있더라도 충돌되지 않는다. 그러나 안하는 것이 좋음
// type별칭은 동일한 이름으로 사용 불가
let a: number | string | boolean = 1;
a = "Hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];
