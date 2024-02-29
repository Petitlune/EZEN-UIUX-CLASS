//생성자 함수를 익명함수 형태로 만든 것 생성자 함수는 객체를 만들기 위함.
//this는 인스턴스 객체를 의미함
const Book = function (title, pages, done) {
  this.title = title;
  this.pages = pages;
  this.done = done;
  // this.finish = function () {
  //   this.done === false ? (str = "읽는 중") : (str = "완독");
  //   return str;
  //   //return은 반환해준다는 뜻
  // };
};
Book.prototype.finish = function () {
  this.done === false ? (str = "읽는 중") : (str = "완독");
  return str;
}; //생성자 함수 안쪽에 함수 안넣었었는데 추후에 추가하고 싶을때 이렇게 가능!
const book1 = new Book("아몬드", 385, false);
console.log(book1.finish());
// 생성자 함수 활용 => 프로토타입 생성 => 인스턴스 객체 생성
//Object => Book(prototype) => book1(__proto__)

//생성자 함수 생성
function Music(title, price) {
  this.title = title;
  this.price = price;
}
//메서드 함수 buy 생성
Music.prototype.buy = function () {
  console.log(`${this.title}를 ${this.price}원에 구매하였습니다.`);
};
//생성자함수와 메서드 함수를 사용해서 인스턴스 객체 생성
const music1 = new Music("누난 너무 예뻐", 500);
music1.buy();

//위에서 만든 생성자 함수와 비슷하면서 조금 기능이 추가된 생성자 함수를 또 만들고 싶다면?
//위의 생성자 함수에 major만 추가
function Livemusic(title, price, major) {
  Music.call(this, title, price);
  this.major = major;
}
Livemusic.prototype.buyLivemusic = function () {
  console.log(`${this.major}, ${this.title}를 구매했습니다.`);
};
Object.setPrototypeOf(Livemusic.prototype, Music.prototype);
// Object.setPrototypeOf는 상속의 연결고리 역할을 해주는 함수
// Object.setPrototypeOf(상속 받고자 하는 함수, 상속가능한 함수)

const music01 = new Livemusic("프리즘", 1200, "최애노래");
//생성자 함수가 상속에 상속을 받는 다는 것을 알려줌.
music01.buyLivemusic();
music01.buy;
