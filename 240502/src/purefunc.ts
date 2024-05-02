//순수함수
const pure = (a: number, b: number): number => {
  return a + b;
};

//불순함수
const impure = (array: number[]) => {
  array.push(1);
  array.splice(0, 1);
};

const global = 10;
const impure02 = (s: number): number => {
  return s + global;
};

//배열 내부에서 사용할 수 있는 메서들 중에서 이런 불순함의 요건에 해당되는 함수들이 많음 => sort, splice, filter

//선언형으로 배열의 주요 메서드를 사용하기 위해서 알고 있어야하는 주요 개념. 깊은 복사와 얕은 복사
