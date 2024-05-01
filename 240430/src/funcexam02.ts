//타입 별칭 => 함수의 타입시그니처 대체 목적

type stringNumberFunc = (arg0: string, arg1: number) => void;

const f: stringNumberFunc = function (a, b) {
  console.log(`${a}는 ${b}`);
};

const g: stringNumberFunc = (c, d) => {
  console.log(`${c}는 ${d}`);
};

// 타입 가드
// 리액트를 사용할 때, useState를 활용해서 state의 초기값이 아직 정해지지 않은 상태에서 최초 렌더링 될 때, undefined 타입으로 결정될때가 반드시 있다.
// 유니온 타입 => Union Type = 더하기(합집합)

interface INameable {
  name: string;
}

const getName = (o: INameable | undefined) => {
  return o !== undefined ? o.name : "unknown name";
};

const n = getName(undefined);
console.log(n);
console.log(getName({ name: "jack" }));
