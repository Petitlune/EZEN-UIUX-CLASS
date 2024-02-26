// const today = new Date();
// console.log(today.getFullYear());
// getFullYear Date라는 함수를 할당받은 객체에서만 사용 가능
// today는 객체가 되었기 때문에 getFullYear라는 함수 사용가능함.
// const theDay = new Date("2025-02-26"); // 빵틀에 넣고 찍어낸 객체 = 인스턴스 객체
// const theDay = new Date(2025, 2, 26); 이렇게 갖고올 수 있는데 차이점은 현재 입력한 해당월에 next 월을 가지고 옴 컴퓨터는 0을 1월로 2는 3월로 인식!!!
// console.log(theDay);

//new가 왜 쓰여지는지에 대한 설명
// const book1 = {
//   title: "자바스크립트",
//   price: 30000,
//   publishingDate: "2025-05-25",
// };
// class Book {
//   constructor(title, price, publishingDate) {
//     this.title = title;
//     this.price = price;
//     this.publishingDate = publishingDate;
//   }
// }
//new라는 예약어- class라는 생성자 함수로 만들어진 객체를 통해서 유사한 객체를 만들어줄 때 new라는 예약어를 써주어야한다. - 즉 Date는 이미 윈도우 내장 함수에 class함수로 정의되어 있다는 뜻 따라서 new라는 예약어를 써서 새로운 객체를 만들어주어야함.
// const Book2 = new Book("자바스크립트", "30000", "2024-02-26");
// console.log(Book2);

// const object = new Object();
// const arr = new Array();
//Object와 Array는 기본적으로 window에 만들어진 틀이다. 위에 Date와 같다.

// const today = new Date();
// const nowMonth = today.getMonth() + 1;
// const nowDate = today.getDate();

// document.write("<h1>오늘 날짜 정보</h1>");
// document.write(`현재 월 : ${nowMonth}월 <br />`);
// document.write(`현재 일 : ${nowDate}일`);

// const open = new Date("2024-01-09");

// const theMonth = open.getMonth() + 1;
// const theDate = open.getDate();

// document.write("<h1>개강일 날짜 정보</h1>");
// document.write(`개강 월 : ${theMonth}월 <br />`);
// document.write(`개강 일 : ${theDate}일`);

// console.log(theMonth);

const today = new Date();
const nowYear = today.getFullYear();
const theDate = new Date(nowYear, 11, 31);
//12월이기 때문에 11숫자를 입력해야한다.
const diffDate = theDate.getTime() - today.getTime();

//밀리초를 일로 바꿔주기 위해서는 일의 밀리초값으로 나눠줘야함.
const result = Math.floor(diffDate / (24 * 60 * 60 * 1000));
//Math.floor는 소수점 날려줌
console.log(result);
document.write(`<h1>연말 D-day : ${result}일 남음</h1>`);
