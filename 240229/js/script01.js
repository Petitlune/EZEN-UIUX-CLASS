//클래스 활용해서 prototype 만들기 / Object.setPrototypeOf라는 함수 가져오지 않아도 상속 받을 수 있다.
class BookC {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  buy() {
    console.log(`${this.title}, ${this.price}원에 구매했습니다.`);
  }
}

const book1 = new BookC("자바스크립트", 15000);
book1.buy();
//extends라는 키워드 사용해서 상속
class TextBookC extends BookC {
  constructor(title, price, major) {
    super(title, price);
    this.major = major;
  }
  buyTextbook() {
    console.log(`${this.major} 전공서적, ${this.title}원에 구매했습니다.`);
  }
}
const book2 = new TextBookC("AI인공지능", 50000, "컴퓨터공학");
book2.buyTextbook();
book2.buy();
