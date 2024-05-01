//실행문
const arrow1 = (a: number, b: number): number => {
  return a + b;
};
//표현식문
//어떠한 프로그래밍 코드를 실행함과 동시에 값을 반환할 수 있는 언어 뒤이어 많이 선보이게 됨.
// JS, TS, Python 등등은 표현식문을 채택
const arrow2 = (a: number, b: number): number => a + b;

//고차함수 & 클로져

//표현식 vs 표현식문

const a = 1;
const b = 2;

//표현식
if (a > b) {
  console.log("a > b");
}

//표현식문 : 표현식을 통해서 도출된 결과값을 어딘가에 담아서 관리할 수 있는 종합적인 문장?
const isGreator = (a: number, b: number): boolean => a > b;
