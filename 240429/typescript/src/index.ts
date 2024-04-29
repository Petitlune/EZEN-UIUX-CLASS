// 타입 주석을 달았다!!! => 타입 불일치 발생할때 즉각 경고!!
// let n: number = 1;
// let b: boolean = true;
// let s: string = "Hello";
// let o: object = {};
// 실무에서는 타입 주석은 특별한 케이스가 아니면 잘 사용안함.
// 실제 타입스크립트는 추론의 기능이 있어서 굳이 주석을 달지 않아도 됨.(특별한 케이스의 경우는 달아야함.)

// let m = 1;
// let p = "Hello";
// let q = false;
// let obj = {};

// let any: any = 0;

// any = "10";
// any = true;
// any = {};

// let unTest: undefined = undefined;
// let numTest = 10;

// 실무에서는 object라는 타입을 거의 쓰지 않는다.
// let o: object = {
//   name: "David",
//   age: 20,
// };

// o = {
//   name: 7,
//   age: 2,
// };

//object 대신 interface를 사용해서 타입 정의
// interface IPerson {
//   name: string;
//   age: number;
// }

// let good: IPerson = {
//   name: "David",
//   age: 20,
// };

// good = {
//   name: "50",
//   age: 5,
// };

//optional property 사용예시

interface IPerson2 {
  name: string;
  age: number;
  //아래가 optional property
  etc?: boolean;
}
let good: IPerson2 = {
  name: "David",
  age: 20,
  // etc: true, // 정의되지 않아도 오류 안남.
};

let ai: {
  name: string;
  age: number;
  etc?: boolean;
} = {
  name: "Petit",
  age: 20,
};

// ai = {
//   name: "dagive",
//   age: 5,
// };

const printMe = (me: { name: string; age: number; etc?: boolean }) => {
  console.log(
    me.etc ? `${me.name} ${me.age} ${me.etc}` : `${me.name} ${me.age}`
  );
};

printMe(ai);
