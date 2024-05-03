const array = [5, 3, 7, 12, 2, 15, 17];

const solution = () => {
  //변수: 어떠한 받을 담을 수 있는 그릇이 필요
  let container;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < array.length; i++) {
    //비교했을때 작은 수를 min에 계속해서 넣어줌.
    if (array[i] < min) min = array[i];
  }
  container = min;
  return container;
};
console.log(solution(array));
