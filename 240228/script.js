// 객체!!
// 프로퍼티
// 프로퍼티 = 속성
// key : value 1쌍 => 프로퍼티

const book1 = {
  title: "자바스크립트",
  pages: 648,
};
//온점 표기법, 대괄호 표기법 = 특정 값만 가져오고 싶을때
// console.log(book1.title);
book1.pages = 50;

//author라는 키와 value 추가
book1.author = "David";
console.log(book1);
//객체를 만드는 두번째 방법
//프로토타입 = 붕어빵 틀
//인스턴스 = 붕어빵 틀을 활용해서 만들어진 붕어빵
const book2 = new Object();
console.log(typeof book2);

book2.title = "typescript";
book2.pages = 500;
book2.author = "Alice";
console.log(book2);
//특정 key 삭제 delete
delete book2.pages;
console.log(book2);
//객체 중첩
for (let i = 0; i < 10; i++) {
  for (let i = 0; i < 10; i++) {}
}

if (true) {
  if (true) {
    console.log("true");
  }
}

const student = {
  name: "David",
  score: {
    history: 85,
    science: 94,
    average: function () {
      return (this.history + this.science) / 2;
    },
  },
};
console.log(window.document.write);
//함수는 곧 객체이다. 함수가 만들어지는 과정 == 따라서 함수는 객체지향 언어라고 한다.
//메서드 = 함수
// window.document.querySelector();
// const window = {
//   document: {
//     querySelector: function () {},
//   },
// };

console.log(student.score.history);
console.log(student.score.average());

const book3 = {
  title: "파이썬",
  pages: 300,
  // buy: function () === buy()
  buy: function () {
    console.log("이 책을 구입했씁니다.");
  },
};
console.log(book3.buy());

//this 객체
//1) addEventListener => 콜백함수 / 화살표함수 => window
//2) addEventListener => 콜백함수 / 익명함수 => 바로 위에 상위요소
//3) 객체 메서드 함수를 생성할 때 / 익명함수 => this 바로 위에 상위요소
// 4) 객체 메서드 함수를 생성할 때 / 화살표함수 => this => window
// const book4 = {
//   title: "HTML5 +CSS3",
//   pages: 500,
//   author: "Peter",
//   done: false,
//   finish: function () {
//     this.done === false ? console.log("읽는중") : console.log("완독");
//   },
// };
// console.log(book4.finish());
// 숫자, 문자, 논리 => 원시타입 :primitve
//객체는 참조타입의 자료 : referece
//원본 데이터 자료 && 사본 데이터 자료

const book5 = {
  title: "세상에서 가장 따뜻했던 순간",
  pages: 500,
  publish: "2005-12-18",
  price: 12000,
};

//커스터마이징 된 객체를 생성
//생성자 함수!!! - 일반적인 함수와는 기능이 다름 : 함수 이름의 첫글자 => 대문자 입력!
//생성자 함수 = 붕어빵 틀
//만들어질 객체 = 붕어빵

//<생성자 함수 만들기>
// function Book(title, pages, done = false) {
//   this.title = title;
//   this.pages = pages;
//   this.done = done;
//   this.finish = function () {
//     let str = "";
//     this.done === false ? (str = "읽는중") : (str = "완독");
//   };
// }
//<붕어빵 = 인스턴스 객체>
const bookOne = new Book("자바스크립트", 648, false);
console.log(bookOne);
const bookTwo = new Book("아몬드", 248, true);
console.log(bookTwo);
// 내장객체함수를 갖다쓰는 대부분은 모두 생성자함수로 만들어진 것이다.

//<class함수 만들기>

class BookTWo {
  constructor(title, pages, done) {
    this.title = title;
    this.pages = pages;
    this.done = done;
  }
}
finish = function () {
  let str = "";
  this.done === false ? (str = "읽는중") : (str = "완독");
};

const bookfour = new BookTWo("html5", 380, true);
console.log(bookfour);
