// 외부에서 data 받아와서 웹브라우저 출력
// JS 동기처리 방식 언어
// JS 비동기 차리 방식 사용 :callback함수, setInterval(), setTimeout(), setClear()
// 콜백 지옥

//2) Promise 객체 사용
const likePizza = true;

//resolve는 정상적 통신,  reject는 비정상적 통신일 경우
const pizza = new Promise((resolve, reject) => {
  if (likePizza) {
    resolve("피자를 주문합니다.");
  } else {
    reject("피자를 주문하지 않습니다.");
  }
});
//result는 결국 true의 문장을 의미. then이 resolve를 출력시키게 만들어줌.
//catch 함수는 첫번째 매개변수 resolve 값은 절대 못 받음. 무조건 reject만 받음.

//한개의 객체 뒤에 연달아서 복수의 메서드 함수를 붙여서 실행시키도록 설계한 코딩 기법
pizza.then((result) => console.log(result)).catch((err) => console.log(err));

//외부에서 데이터를 가져올 때 예외조항 처리!!
//에러가 발생했을 때, 미리 에러메세지를 커스텀
// try / catch / finally
pizza
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => console.log("완료"));
