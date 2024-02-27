//round - 소수점 5이상은 올리고 5미만은 버리고

let num = 3.54;
let maxNum = Math.max(10, 5, 8, 30);

let minNum = Math.min(10, 5, 8, 30);

let roundNum = Math.round(num);
console.log(roundNum);

//floor - 소수점 반드시 버리는
let floorNum = Math.floor(num);
console.log(floorNum);
//ceil - 소수점 반드시 올리는
let ceilNum = Math.ceil(num);
console.log(ceilNum);

//random() - 소수점을 가지고 있는 실수 형태의 숫자를 난수형태로 반환해준다. ==> 안에 굳이 매개변수 넣어줄 필요가 없다. =로또 번호 생성 원리 - 0이상 1미만인 실수값만 나온다. 절대 1이 나올 수가 없다.
let rndNum = Math.random();
// let rndNum = Math.floor(Math.random() * 100); // -로또 번호생성
console.log(rndNum);

//PI - 원주율 = 3.141592

let piNum = Math.PI;
console.log(piNum);
