//배열에 사용할 수 있는 메서드
//concat () : 두개 이상의 배열을 추가해서 하나의 배열로 만들고자 할 때

const vegitable = ["양상추", "토마토", "피클"];
const meat = ["불고기"];
// const meatBurger = vegitable.concat(meat, "빵");
const meatBurger = meat.concat(vegitable, "빵");
console.log(meatBurger);

const cheese = ["모짜렐라", "슈레드"];
const cheeseBurger = [vegitable, cheese];
//아래와 같이 사용하면 배열안에 배열을 만드는 것이 아닌 하나의 배열로 만들어줄 수 있음.
// const cheeseBurger = [...vegitable, ...cheese];
console.log(cheeseBurger);

// 배열 정렬!
const numbers = [6, 9, 3, 21, 18];
numbers.reverse();
console.log(numbers);

const values = [5, 20, 3, 11, 4, 15];
values.sort();
console.log(values);
//sort함수를 사용하기 위해서는 정의를 해주어야 함. 기본 default 값이 작은 숫자를 좌측에 정렬하고자 하는 속성을 갖고 있음.
// values.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
//   if (a === b) return 0;
// });

// sort오름차순 정렬
values.sort((a, b) => {
  return a - b;
});
// sort내림차순 정렬
values.sort((a, b) => {
  return b - a;
});

console.log(values);

// 배열 안에 아이템을 추가 및 삭제하는 메서드

const animals = ["lion", "bear", "bird"];

animals.pop(); //마지막 아이템 제거
console.log(animals);

animals.push("tiger"); //마지막에 아이템 추가
console.log(animals);

animals.shift();
console.log(animals); //첫번째 아이템 제거

animals.unshift("dog");
console.log(animals); // 배열 맨 앞에 아이템 추가

//split(구분자) : 문자열 => 배열
//slice(인덱스) : 문자열 내 특정 인덱스 값부터 문자열

//splice()
const subjects = ["html", "css", "javascript", "react", "typescript"];
subjects.splice(2, 4, "vue", "node");
console.log(subjects);
// const subjects01 = subjects.splice(2, 4); //2번 인덱스에서 4번 인덱스까지 잘라서 보여준다.
// console.log(subjects01);

//splice 함수와 slice 함수 => 매개변수를 1개만 받았을 경우, 해당 매개변수의 인덱스 값부터 끝까지의 값을 추출해온다. 공통점
//splice 함수는 원본 배열 데이터에도 영향을 미친다. slice는 아님
