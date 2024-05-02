// 원시타입과 달리 참조타입(객체, 배열...)의 자료는 태생적으로 얕은복사의 형식

const originalArray = [5, 3, 7, 9];
const shallowCopiedArray = originalArray;
// const shallowCopiedArray = [...originalArray];
//위와 같이 전개연산자 구문을 활용해서 깊은복사를 해야 원본 데이터가 유지된 채로 복사할 수 있음.
shallowCopiedArray[0] = 0;

console.log(originalArray, shallowCopiedArray);
