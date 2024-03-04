//정규표현식 = Regular Expression 어떤 특정 패턴을 정의하고자 할 때, 패턴의 결과값 도출하고자 할때
// let regexp = /\d(3)/;
let regexp = new RegExp(/\d(3)/);
console.log(regexp.test("123"));
console.log(regexp.test("hello"));

// let str = "ES2024 is powerful!";
// console.log(str.match(/ES6/));
// str.replace(/ES2024/, "ES6");

console.log(/es/.test(str));
console.log(/es/i.test(str));

console.log(str.match(/ES\d/));
let hello = "Hello, everyone";

/^H/.test(hello);
console.log(/^H/i.test(hello)); //i는 대소문자 구별하지 않고 다 찾아온다.

/one.$/.test(hello); //$는 특정한 패턴으로 끝날 때
console.log(/one$/.test(hello));

let testStr = "ES2024";
// testStr.match(/[0-9]/g); global이라는 플래그
console.log(testStr.match(/[0-9]/g));
console.log(testStr.match(/[^0-9]/g));

let str = "Oooops";
str.match(/\o/);
console.log(str.match(/\o\o/));
console.log(str.match(/o{2}/));
console.log(str.match(/o{2,}/));
console.log(str.match(/o{2,4}/));
//자주 사용하는 정규표현식

//숫자만 찾아오고자 할 때
/^[0-9]+$/;
//  양의 정수값만 찾아오고자 할 때
/^[0-9]]\d*$/;
//  음의 정수값만 찾아오고자 할 때
-/^[0-9]]\d*$/;

//숫자와 영문자만 찾아오고자 할 때
/^[a-ZA-z0-9]+$/;
