// if(//조건식이 참이어야) {
//실행문이 실행됨! }

// let x = 10;

// if (x > 5) {
//   console.log("x는 5보다 큽니다.");
// }

// //================if else문

// const userInput = prompt("당신의 이름을 입력하세요");
// if (userInput == null) {
//   alert("취소하셨습니다.");
// } else {
//   alert(`${userInput}님 환영합니다.`);
// }

// //===============if else 문의 옵션 else if문
// const score = Number(prompt("프로그램 점수 : "));
// //예외조항 처리
// //중첩사용이 가능 = 반복해서 사용할 수 있음. --> 중첩 if 구문
// if (score != null) {
//   if (score >= 90) {
//     alert("A학점");
//   } else if (score >= 80) {
//     alert("B학점");
//   } else {
//     alert("C학점");
//   }
// }

//조건문을 활용해서 사용자에게 숫자를 받아서 그 숫자가 짝수인지 홀수 인지를 확인후 알림창을 활용해서 사용자에게 짝수 , 홀수 입니다 메세지를 출력해주세요.
// 짝수정의 , 홀수정의, if문 else문 이용해서 if일떄 짝수 else 일때 홀수

//*식별자 사용할 때 예약어 쓰면 안됨 (ex document, window) / 변수명 작명 가장 앞에 사용할 수 있는 것들 : $, _ 영문자 가능 (*숫자와 특수문자 불가능) / 대소문자 반드시 구분
// camel 표기법 : userInput
// sneak 표기법 : user_input
// 헝가리언표기법 : Userinput

const num = prompt("숫자를 입력해주세요");
const even = Number(prompt("짝수"));
const odd = Number(prompt("홀수"));
let result = num / 2;

// if (num != null) {
//   const reset = Number(num);
//   if (result % 2 == 0) {
//     alert("짝수입니다.");
//   } else {
//     alert("홀수입니다.");
//   }
// } else {
//   alert("취소하셨습니다.");
// }
// //삼항조건 연산자
if (userNum != null) {
  const reset % 2 === 0 ? alert("짝수입니다.") : alert("홀수입니다.");
} else {
  alert("취소하셨습니다.")
}

// const season = Number(prompt("'월'을 입력해주세요"));

// if (season < 13) {
//   if (season >= 9) {
//     alert("독서의 계절 가을이네요!");
//   } else if (season >= 6) {
//     alert("여행하기 좋은 여름이네요!");
//   } else if (season >= 3) {
//     alert("햇살 가득한 봄이네요!");
//   } else {
//     alert("따뜻한 겨울이네요");
//   }
// } else {
//   alert("월을 다시 입력해주세요");
// }

// let month = prompt("현재는 몇 월인가요?", "ex. 2");

// if (month != null) {
//   month = Number(month);
//   if (month >= 9 && month <= 11) {
//     alert("독서의 계절 가을이네요");
//   } else if (month >= 6 && month <= 8) {
//     alert("청량한 여름이네요");
//   } else if (month >= 3 && month <= 5) {
//     alert("가을이긴 한가봐");
//   } else if (month >= 13 && month <= 0) {
//     alert("존재하지 않는 월 입니다.");
//   } else {
//     alert("따뜻한 겨울이네요");
//   }
// } else {
//   alert("취소하셨습니다.");
// }

// 사용자에게 id와 pw값을 받으세요. 그리고 해당 id와 pw값이 다음과 같다면 "반갑습니다 어서오세요" 라는 알림 메세지를 출력해주세요
// id : ezenit / pw : 1234

//그런데 만약 id만 일치하고 pw가 틀렸을 경우에는 "비밀번호를 확인해주세요"라는 메세지 출력 만약 id와 pw 둘다 틀렸을 경우 "아이디를 확인해주세요" 라는 알림 메세지 출력

// const id = "ezenit";
// const pw = "1234";

// const userid = prompt("아이디를 입력해주세요");

// if (userid === id) {
//   const userPw = Number(prompt("비밀번호를 입력해주세요"));
//   if (userPw === pw) {
//     alert(`${userid}님 반갑습니다.`);
//   } else {
//     alert("비밀번호가 일치하지 않습니다.");
//     location.reload();
//   }
// } else {
//   alert("아이디가 일치하지 않습니다.");
// }

//=================switch문 사용
//  switch(//조건식 => 참) {
//   case 1 : 실행문
//   break;
//   case 2 : 실행문
//   break;
//   case 3 : 실행문
//   break;
//   case 4 : 실행문
//   break;
// }
// const subject = prompt("신청할 과목을 선택하세요", "1-HTML, 2-CSS, 3-JS");

// if (subject !== null) {
//   switch (subject) {
//     case "1":
//       alert("HTML을 신청하셨습니다.");
//       break;
//     case "2":
//       alert("CSS을 신청하셨습니다.");
//       break;
//     case "3":
//       alert("JS을 신청하셨습니다.");
//       break;
//     default:
//       alert("잘못입력하셨습니다.");
//   }
// } else {
//   alert("취소하셨습니다.");
//   location.reload();
// }

//사용자에게 즐겨찾는 쇼핑몰을 물어보시고 이에 대한 답을 받아주세요.
// 쇼핑몰 후보 : 쿠팡, G마켓, 11번가, 마켓컬리
// 사용자가 선택한 쇼핑몰이 후보군 안에 존재한다면 확인버튼 누른 후 prompt창에 "확인" 버튼을 클릭하는 순간, 해당 쇼핑몰로 바로 이동하게 만들어주세요.
// ==> window 객체 안에 location 객체는 어디론가 이동하게 해주는 객체 ==> 이 안에 href로 경로를 지정해줄 수 있음. ==> 쿠팡 선택시 location.href = "https://www.coupang.com" 로 설정하면 쿠팡으로 이동

// const mall = prompt("즐겨찾는 쇼핑몰을 입력하세요");

// if (mall != null) {
//   switch (mall) {
//     case "쿠팡":
//       location.href = "https://www.coupang.com";
//       break;
//   }
//   switch (mall) {
//     case "G마켓":
//       location.href = "https://www.gmarket.co.kr";
//       break;
//   }
//   switch (mall) {
//     case "11번가":
//       location.href = "https://www.11st.co.kr";
//       break;
//   }
//   switch (mall) {
//     case "마켓컬리":
//       location.href = "https://www.kurly.com";
//       break;
//   }
// }

//============class(정통적인) for문
//for(// 초기값; 조건식; 증감문) {
// // 실행문
//}

const students = ["Park", "Kim", "Lee", "Kang"];
// for (let i = 0; i < students.length; i++) {
//   document.write(`${students[i]}, `);
// }

//==========forEach 문
// 배열.forEach(function(배열 안에 있는 각각의 아이템) {
//   //실행문
// })

// students.forEach(function (student) {
//   document.write(`${student}, `);
// });

//for문 활용해서 구구단 출력하기 ===> if문 처럼 중첩가능
// for (let a = 2; a <= 9; a++) {
//   document.write("<h2>" + "[ 구구단 " + a + "단 ]" + "</h2>");
//   for (let b = 1; b <= 9; b++) {
//     document.write(a + "x" + b + " = " + a * b);
//     document.write("<br/>");
//   }
// }

//중첩 for문을 활용해서 5행 5열의 테이블을 만들어보자
// let num = 1;
// let t = "<table border=1>";
// for (let i = 1; i <= 5; i++) {
//   t += "<tr>";
//   for (let k = 1; k <= 5; k++) {
//     t += "<td>" + num + "</td>";
//     num++;
//   }
//   t += "</tr>";
// }
// t += "</tabel>";
// document.write(t);

//for in => 객체 전용
//for of => 배열 전용

// const gitBook = {
//   title: "깃 & 깃허브",
//   pubDate: "2024-02-15",
//   pages: 272,
//   finished: true,
// };
// //key는 변수이다.
// for (key in gitBook) {
//   document.write(`${key} : ${gitBook[key]}</br>`);
// }

// for (student of students) {
//   document.write(`${student}, `);
// }

//while문

// while(조건식 => true) {
//  //실행문
// }
// let stars = Number(prompt("별점을 매겨주세요!"));
// while (stars > 0) {
//   document.write("*");
//   stars--;
// }

//do while문은 처음은 일단 실행시킨다.
// do {
//   document.write("*");
//   stars--;
// } while (stars > 0);

// for (let i = 1; i <= 100; i++) {
//   if (i % 5 == 0 && i % 7 != 0) {
//     document.write("<p class='red'>" + i + "</p>");
//   } else if (i % 7 == 0 && i % 5 != 0) {
//     document.write("<p class='green'>" + i + "</p>");
//   } else {
//     document.write("<p class='aqua'>" + i + "</p>");
//   }
// }
//break문 예시
// for (let i = 1; i <= 10; i++) {
//   if (i === 6) {
//     break;
//   } else {
//     document.write(i, "<br/>");
//   }
// }
// //continue문 예시
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else {
//     document.write(i, "<br/>");
//   }
// }

// 사용자에게 숫자를 하나 전달받으세요. 해당 숫자가 소수인지 아닌지 식별한 수 만약 해당 숫자가 소수라면 웹 브라우저 화면에 00숫자는 소수입니다. 라고 출력해주세요.
//단락회로평가 : 특정값이 논리형 값 => true / false
// const num = Number(prompt("숫자를 입력하세요"));
// let isPrime;

// if (num === 2) {
//   isPrime = true;
// } else {
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       isPrime = false;
//       break;
//     } else {
//       isPrime = true;
//     }
//   }
// }
// if (isPrime) {
//   document.write(`${num}는 소수입니다.`);
// } else {
//   document.write(`${num}는 소수가 아닙니다.`);
// }

//웹브라우저 화면에 아래에 보이는 배열 아이템 중 10이상되는 숫자만 출력해주세요.

//배열안에 있는 아이템을 내가 컨트롤할 수 있게 만드는 것부터 시작

// const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 10) {
//     document.write(`${arr[i]}  `);
//   }
// }

//사용자에게 1보다 큰 수를 하나 전달받으세요. 그리고 그 숫자 안에 있는 짝수들만 더해서 웹 브라우저 화면에 출력해주세요.

// 숫자보다 작은 숫자들의 배열을 모두 찾는다.
// 그 배열 중 짝수를 찾는다
// 짝수들을 모두 더한다

const num = Number(prompt("1보다 큰 숫자를 입력해주세요"));
//NaN은 Not a Number
let sum = 0;
console.log(sum);

for (let i = 1; i <= num; i++) {
  if (i % 2 === 1) {
    continue;
  } else {
    //할당연산자 += 공부하기
    sum += i;
    document.write(`${i} ---- ${sum} <br/>`);
  }
}
