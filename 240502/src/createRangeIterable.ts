// 선언형 방식으로 이터러블한 객체를 만들어보겠다.
//자바스크립트는 1급시민 이라서 return문 안에 함수 가능

const createRangeIterable = (from: number, to: number) => {
  let currentValue = from;
  return {
    next() {
      const value = currentValue < to ? currentValue++ : undefined;
      const done = value === undefined;
      return value, done;
    },
  };
};
