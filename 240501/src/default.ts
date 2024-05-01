interface IPerson {
  name: string;
  age: number;
}

//템플릿 리터럴 : 문자 => 변수를 문자열로 찾아와서 값을 사용하고자 할 때
//리터럴 타입 : 문자 타입

//변수 안에 담기는 value 값을 가지고 타입을 추론할 때 리터럴 타입이 작동되었다고 이야기한다.
//타입구조도
//슈퍼타입 <-> 서브타입

//실행문
// const makePerson = (name: string, age: number = 10): IPerson => {
//   const person = {
//     name: name,
//     age: age,
//   };
//   return person;
// };

//위 실행문을 표현식문으로 만들어주기
const makePerson = (name: string, age: number = 10): IPerson => ({
  name,
  age,
});

console.log(makePerson("david"));
console.log(makePerson("david", 20));
