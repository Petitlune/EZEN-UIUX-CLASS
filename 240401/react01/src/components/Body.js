import React from "react";
const Body = () => {
  //JSX문법
  // const number = 1;
  // const numA = 2;
  // const numB = 3;
  // const strA = "안녕";
  // const strB = " 리액트";
  // const boolA = true;
  // const boolB = false;
  // const objA = {
  //   a: 1,
  //   b: 2,
  // };
  const num = 19;
  // return (
  //import React from "react";존재해야   <React.Fragment> 사용 가능.
  //if 조건문 사용시
  if (num % 2 === 0) {
    return <div>{num}은 짝수입니다.</div>;
  } else {
    return <div>{num}은 홀수입니다.</div>;
  }
  // <>
  {
    /* <h1>body</h1> */
  }
  {
    /* <h2> */
  }
  //if 조건문 잘 안쓴다.
  {
    /* {num}는 {num % 2 === 0 ? "짝수" : "홀수"} 입니다 */
  }
  {
    /* </h2> */
  }
  {
    /* <h2>a: {objA.a}</h2>
      <h2>b: {objA.b}</h2> */
  }
  {
    /* <h1>{number}</h1>
      <h2>{numA + numB}</h2>
      <h2>{strA + strB}</h2>
      <h2>{String(boolA || boolB)}</h2> */
  }
  // </>
  // );
};

export default Body;
