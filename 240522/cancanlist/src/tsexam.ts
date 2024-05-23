// 함수타입 & 제네릭 타입
// 함수는 어떤 값(의 타입)을 받아서 어떤 값(의 타입)을 반환

//두개의 매개변수의 타입지정과 그 결과값도 타입지정!
const func = (a: number, b: number): number => {
  return a + b;
};
//<함수 타입>

// 응용 1) 함수에 기본 매개변수를 설정할 때. ==> 매개변수를 위반하는 타입은 애초에 받지 않겠다는 의미를 지님.
// 사용자가 값을 넣지 않았을때는 David로 사용하라고 기본 매개변수 지정
const introduce = (name: string = "David") => {
  console.log(`name: ${name}`);
};

introduce();

// 응용 2) 함수에 선택적 매개변수(*optional property를 설정할 때) =>
// tall?: number 물음표의 의미는 선택적으로 매개변수 사용해도 된다는 의미
// tall?: number, age: number 필수 매개변수는 선택적 매개변수보다 무조건 앞에 작성되어야 한다.  age: number, tall?: number
const introduce01 = (name: "petit", age: number, tall?: number) => {
  console.log(`name: ${name}`);
  console.log(`tall: ${tall}`);
  if (typeof tall === "number") {
    console.log(`tall: ${tall + 10} `);
    //타입 가드 = 타입을 좁혀나간다는 의미
  }
  // console.log(`tall: ${tall + 10} `);  =>   선택적 매개변수 사용할 때 가장큰 오류!!! 값을 주지 않아도 아무 문제 없이 실행되어야하는데 그때의 타입은 undefined이기 때문에 숫자와 더해질 수 없다. ==> 타입가드를 사용
};

//응용 3) 함수에 전개연산자 형식(rest parameter)의 rest 매개변수를 설정할 때

const getSum = (...rest: number[]): number => {
  let sum = 0;
  rest.forEach((item) => (sum += item));
  return sum;
};

getSum(1, 2, 3); //...rest: number[]는 인자값으로 들어온 1, 2, 3의 숫자를 모아서 배열로 만들어준다.

//응용 4) 함수 타입표현식 => 함수의 타입별칭
// interface - extends , 동일한 인터페이스명 사용 가능
// type 별칭은 대수타입 유니온 / 인터섹션을 만들어낼 수 있다는 차이점.

type Add = (a: number, b: number) => number;
const add: Add = (a, b) => a + b;
const sub: Add = (a, b) => a - b;
const multiply: Add = (a, b) => a * b;
const divide: Add = (a, b) => a / b;

//응용 5) 함수 타입표현식 => 호출 시그니처 형식

type Operation = {
  (a: number, b: number): number;
  name: string;
};
const add2: Operation = (a, b) => a + b;
add2.name;

//응용 6) 함수 타입에 대한 호환성
//특정 함수의 타입을 다른 함수의 타입으로 포함시킬 수 있는가를 따져보는 개념!

type A = () => number; //슈퍼타임
type B = () => 10; //서브타입

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; 서브타입의 아이템을 슈퍼타입의 아이템으로 할당하는 행위(upcasting). 반대의 경우(downcasting).

//응용 7) 함수 타입호환성 > 매개변수 기준() *헷갈리는 부분*
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d;
d = c; //거의 유일하게 downcasting이 허용되는 경우

type Animal = {
  name: string;
}; // 슈퍼타입

type Dog = {
  name: string;
  color: string;
}; // 서브타입

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (animal: Dog) => {
  console.log(animal.name);
  console.log(animal.color);
};

// animalFunc = dogFunc; //슈퍼타입에 색상에 대한 타입정의가 애초에 없으므로 서브타입의 아이템을 받아줄 수 없다. 이러한 경우는 거의 유일하게 반대는 가능(downcasting)
dogFunc = animalFunc;

//응용 8) 함수 타입호환성 > 매개변수 기준(개수가 다른 경우)

type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; // 매개변수 1개가 매개변수 2개를 호환할 수 없음

// 응용 9) 함수 오버로딩(*익명함수에서는 사용 불가(화살표함수에서는 사용 불가), function의 함수 형태로 만들어야함.)

// 함수 오버로드
function func10(a: number): void;
function func10(a: number, b: number, c: number): void;

// 함수 구현
function func10(a: number, b?: number, c?: number) {
  if (typeof b === "number" && typeof c === "number") {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}
// 함수 호출
func10(1);
// func10(6, 2); // 인수가 1개나 3개로 정해져있기 때문에 불가능하다.

//응용 10) 함수 구현 타입정의 => 커스터마이징 => 사용자 정의 타입 가드
type Dog01 = {
  name: string;
  isBark: boolean;
};
type Cat01 = {
  name: string;
  isScratch: boolean;
};
type Animal01 = Dog01 | Cat01; //유니온 타입

const warning = (animal: Animal01) => {
  if ("isBark" in animal) {
    //조건문 안에 사용자 정의 타입가드로 영역을 설정해주어서 콘솔 안에 값이 가능하게 만들어주었다.
    console.log(animal.isBark);
  } else if (" isScratch" in animal) {
    console.log(animal.isScratch);
  }
};
//사용자 정의 타입 가드 예제

const isDog = (animal: Animal01) => {
  return (animal as Dog01).isBark; //as Dog01로 타입단언을 해주었다.
};

//<제네릭 타입> : 어떠한 타입의 변수가 들어올지 모르지만 그래도 타입정의 먼저 해주어야할 때 사용.
//Generic => General(*종합적인): General Hospital(종합병원)
//=> 어떤 값이 들어올지 미정이라면 타입의 치트키 any를 쓰면 안되나?
// const func20 = (value: any) => {
//   return value;
// };

// num.toUpperCase();==> any를 사용했기 때문에 이러한 말도안되는 문장에도 오류가 뜨지 않는다. 따라서 any 사용 자제!

//그러면 any 말고 더 슈퍼타입인 unknown을 사용하면 안되나?
const func20 = (value: unknown) => {
  return value;
};

let num = func20(10);
let str = func20("petit");

// num.toUpperCase(); 에러 뜸, 필터링 해줌.
//num.toFixed(); 정수에 쓸수있는 toFixed함수까지(아예 오류가 없는 문장인데도 불구하고) 필터링해서 또 말도 안되는 오류를 발생시킴.
//===> 그러므로 제네릭 타입 사용
//T는 타입변수이다. <T>는 타입변수를 선언하는 것임.

const func30 = <T>(value: T): T => {
  return value;
};

let num30 = func30(10);

const func40 = <T>(value: T): T => {
  return value;
};

let arr = func40([1, 2, 3]);
let arr01 = func40<[number, number, number]>([1, 2, 3]); //함수 안에 타입을 직접적으로 명시하는 경우 - 흔하지 않은 방법

//제네릭 타입 응용!

// 1)
//반론제기 : 타입변수 선언 okay 변수의 타입이 꼭 하나라는 법이 존재하나? No
// 제네릭 타입안에 타입변수를 복수로 두개 줌. T, U 따라서  swap("1", 2) 가능하게 됨.
const swap = <T, U>(a: T, b: U) => {
  return [b, a];
};

const [a1, b1] = swap("1", 2);

// 2)
const returnFirstValue = <T>(data: T[]) => {
  return data[0];
};
const num50 = returnFirstValue([0, 1, 2]);
const num60 = returnFirstValue(["str", 1, 2]);

// 3) 배열  안에 찾아오는 값이 명확할 때 타입변수를 [] 안에 넣어주고 해당 인덱스 자리에 타입변수 넣어줌.
const returnFirstValue01 = <T>(data: [T, ...unknown[]]) => {
  return data[0];
};

const num80 = returnFirstValue(["petit", 1, 2]);

// 4)
const getLength = <T extends { length: number }>(data: T) => {
  data.length;
};

getLength("123");
getLength([1, 2, 3]);
getLength({
  length: 2,
});
// getLength(null); //이 둘은 안됨
// getLength(undefined);
