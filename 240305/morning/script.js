//함수, 매개변수, 및 인자(*인수)값 작동 원리
//함수의 매개변수에 <기본값> 설정하는 법.
const hello = (name, message = "안녕하세요") => {
  console.log(`${name}님 ${message}`);
};
hello("홍길동", "반갑습니다.");
hello("영심이");

//함수, <나머지 매개변수>
//...numbers는 매개변수에 몇개가 들어오든 상관없게 해준다.
const addNum = (...numbers) => {
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
};
console.log(addNum(1, 2));
console.log(addNum(1, 2, 3, 4, 5));

// <배열 안에서 전개연산자 역할>

//서로 다른 두개의 배열을 합치고자 할 때 (concat / 전개연산자)
const animals = ["bird", "cat"];
const shinee = ["onew", "jonghyun", "key"];
//배열합치는방법 1.
console.log(animals.concat(shinee));
//배열합치는방법 2.
// const result = [animals, shinee];
//배열합치는방법 2 : 전개연산자(...)로 배열 합침
const result = [...animals, ...shinee];
console.log(result);

//참조타입의 자료형
const shinee01 = ["onew", "jonghyun", "key"];
const shinee02 = shinee01;
// shinee01[0] = "minho";
// console.log(shinee02);
//원본데이터는 그대로 유지시키고 싶을 때 전개연산자구문(...)이용
const shinee03 = [...shinee01];
shinee01[0] = "minho";
console.log(shinee01);
console.log(shinee03); //0번째 배열값 바뀌지 않음

//<객체>

//객체 안에 신규 key & value를 생성하는 방법
const singer = {
  title: "shinee",
  member: 5,
};
//온점 표기법
singer.leader = "onew";
console.log(singer);
//대괄호 표기법
singer["support"] = "shineeWorld";
console.log(singer);

//객체 안에 프로퍼티 이름을 함수로 생성하는 방법(많이 사용하지는 않음..)

const fn = () => {
  return "result";
};

const add = (a, b) => {
  return a + b;
};
const obj = {
  [fn()]: "함수 키",
  // ["result"]: "함수 키", 와 같다
  //숫자가 들어올 수 없기 때문에 문자열로 바꾸어준다. 벡틱 사용
  [`${add(10, 20)} key`]: "계산식 키",
};

console.log(obj);

//심볼 :유일무이한 값 생성, 외부에서 특정 객체의 키값을 찾아오지 못하도록 하기 위한 목적

let taemin01 = Symbol();
let taemin02 = Symbol();
console.log(taemin01 === taemin02); //false

const boy = Symbol("boy");
const tel = Symbol("telnumber");

const member = {
  name: "taemin",
  age: "32",
  fnc: function () {
    console.log("test");
  },
  [boy]: 1235,
  [tel]: function () {
    alert(prompt("전화번호 : "));
  },
};
// console.log(member);
// member[tel]();
//심볼 : 외부에서 특정 객체의 키값을 찾아오지 못하도록 하기 위한 목적
for (let item in member) {
  console.log(`${item} : ${member[item]}`);
}

//전역 요소 심볼 생성 => 찾아오고 싶을 때
//심볼을 유일하게 복제하는 방법(for)

const tell = Symbol.for("tel");
const phone = Symbol.for("tel");

console.log(tell === phone);
console.log(Symbol.keyFor(phone));
