//배열에서 반복문 사용

const numbers: number[] = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  const item: number = numbers[i];
  console.log(item);
}

//배열에서 구조분해할당.

const array: number[] = [1, 2, 3, 4, 5];

const [f, s, t, v, g] = array;
console.log(f, s, t, v, g);

//for in 문 : 객체의 key값을 가져와서 무언가를 할때 사용.

interface testObj {
  first: string;
  second: string;
  third: string;
}
const names: testObj = {
  first: "Petit",
  second: "JJong",
  third: "Taemin",
};

for (let i in names) {
  console.log(i);
}
