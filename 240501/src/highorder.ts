//일반적인 함수

const add1 = (a: number, b: number): number => a + b;

//고차함수

// const add2 =
//   (a: number): ((arg0: number) => number) =>
//   (b: number): number =>
//     a + b; //이 값을 클로져라고 부른다.

// const result = add2(1)(2);
// console.log(result);

//타입별칭을 만들어 써줌
export type NumberToNumberFunc = (arg0: number) => number;

export const add = (a: number): NumberToNumberFunc => {
  const _add: NumberToNumberFunc = (b: number): number => {
    return a + b;
  };
  return _add;
};

//고차함수는 함수 안에 또다른 함수를 실행시킨 후 바깥쪽에서 실행된 결과값을 받아서 내부에서 연산 및 처리작업 후 최종 결과값을 출력할 수 있도록 하기위해 고안된 함수

//클로저 = closure : 고차함수가 실행되기 위해서 필요한 개념.
// ==> 고차함수를 실행시키기 위한 중요한 JS 개념
//변수 : scope => Global / Local
