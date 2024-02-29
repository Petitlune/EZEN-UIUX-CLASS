// const str = "hello";
// const greeting = "안녕하세요!";
// const str01 = "Good Morning";
// console.log(greeting.length);
// //특정위치에 존재하는 문자열을 찾아오는 함수
// console.log(str01.charAt(5));

//charAt( ): 매개변수의 인덱스 값을 가지고 있는 문자열을 찾아올 때 (*문자열[인덱스값]으로도 사용 가능, 특정 문자열 찾는 방법 counting
// const string = prompt("문자열을 입력하세요.");
// const letter = prompt("어떤 문자를 체크하시겠습니까?");
// const counting = (str, ch) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === ch) {
//       count += 1;
//     }
//   }
//   return count;
// };

// const result = counting(string, letter);
// document.write(`${string}에는 ${letter}가 ${result}번 사용되었습니다.`);

const str1 = "Good Morning, Everyone. Beautiful Morning";
//매개변수로 들어온 문자열이 들어온 시작점의 인덱스값을 찾아옴??
console.log(str1.indexOf("Morning"));
console.log(str1.indexOf("evening")); //존재하지 않는 단어는 -1 출력

//startsWith( ):문자열 전체에서 처음 시작하는 단어가 맞는지 확인
// (*매개변수 2개를 전달 : 첫번째 매개변수가 두번째 매개변수의 위치에서 시작)
const str2 = "Hello, everyone";
console.log(str2.startsWith("Hello"));
console.log(str2.startsWith("hello"));
console.log(str2.startsWith("He"));
console.log(str2.startsWith("Hello, ev"));
console.log(str2.startsWith("el", 1));
console.log(str2.startsWith("o", 4));
//enesWith() : 마지막 단어가 맞는지 확인
console.log("======endsWith======");
console.log(str2.endsWith("everyone"));
console.log(str2.endsWith("everyone."));
console.log(str2.endsWith("Everyone"));
console.log(str2.endsWith("one"));
console.log(str2.endsWith("lo, everyone"));
//enesWith() : 문자열 안에 매개변수 문자가 있으면 참 없으면 거짓
console.log("======includes======");
console.log(str2.includes("one"));
console.log(str2.includes("Eve"));
// trim(), trimStart(), trimEnd() 문자열 앞/ 뒤에서 빈 문자열을 찾아서 없애주는 기능
console.log("======trim methods======");
const str3 = "ab cd ef";
const str3_1 = " ab cd ef ";
console.log(str3);
console.log(str3_1);
//모두 대문자로 모두 소문자로
console.log("======Uppercase / Lowercase =======");
let str4 = "Good Morning";
console.log(str4.toUpperCase());
console.log(str4.toLowerCase());

//매개변수 1개 :  혹은 2개 입력 가능, 매개변수 1개 : 해당 매개변수의 인덱스값부터 문자열의 끝까지 모두 찾아오는 기능
//매개변수 2개 : 첫번째 매개변수 부터 두번째 매개변수의 바로 앞까지 문자열을 찾아오는 기능
console.log("======substring=======");
//5 6 7까지 찾아오라는 뜻
console.log(str4.substring(5, 8));
console.log(str4.substring(5));
console.log(str4.substring(-5, 11)); // 음수값을 전혀 인식하지 못함. 음수값 들어오는 순간 바로 0으로 치환시킴.
// 기본적으로 substring과 문법이 동일하나 차이점은 음수값 인식 여부
console.log("========== slice =========="); // 음수를 쓸 수 있다.
console.log(str4.slice(0, 4));
console.log(str4.slice(0));
console.log(str4.slice(-5, 11));
//split 사용자로 받은 문자의 값을 배열로 변경시킬 수 있음.
console.log("========== split ==========");
const str5 = "Hello everyone";
const array1 = str5.split(" ");
const array2 = str5.split("");
console.log(array1);
console.log(array2);
