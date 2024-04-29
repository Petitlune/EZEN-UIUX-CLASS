//추상클래스를 생성할 때는 class 명령어 앞에 abstract를 붙인다.
//반드시 추상클래스를 만들때에는 반드시 하나 이상의 abstract 메서드(함수) =>  추상화 되어야할 속성(공통분모) 가 존재해야 함!!!!

abstract class AbstractPerson5 {
  abstract name: string;
  constructor(public age?: number) {}
}
