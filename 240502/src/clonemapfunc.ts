//  map함수 직접 선언형으로 만들어보기
// 타입변수를 두개 선언 T, Q
export const map = <T, Q>(
  array: T[],
  callback: (value: T, index?: number) => Q
): Q[] => {
  let result: Q[] = [];
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    result = [...result, callback(value, i)];
  }
  return result;
};
