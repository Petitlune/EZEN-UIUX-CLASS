//왜 컴포넌트로 작업해야하나 ==> 디버깅 과정이 편하다. state 변수가 업데이트되는 순간 컴포넌트가 rerendering된다.

//React는 Rendering이 매우 중요한 개념
//=>html을 포함한 기타 웹브라우저 parsing할 수 있는 문서를 웹 브라우저가 화면에 출력하는 기능을  rendering이라고 함
//<rendering이 일어나는 경우>
//component가 mount가 되는 순간 최초로 발생
//component의 state 값이 변경되는 경우
//부모 component로부터 받아오는 props의 값이 변경되는 경우
//부모 component가 rendering 되는 경우
const Viewer = ({ num }) => {
  console.log("viewer component update!");
  return (
    // <div>{num % 2 === 0 ? <h3>짝수입니다</h3> : <h3>홀수입니다</h3>}</div>;
    <h2>Viewer</h2>
  );
};

export default Viewer;
