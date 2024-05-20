//Ts 기본개념!!!

// 1) 타입별칭(변수를 생성하듯이 간편하게 사용하고자 할때 쓴다.)
// => 함수 혹은 객체 등의 요소를 생성할 때, 시그니처 형식으로 타입을 정의하고자 할 때 간단하게 생성!
type User = {
  id: number;
  name: string;
  nick: string;
  birth: number;
  bio: string;
  location: string;
};

const user: User = {
  id: 1,
  name: "김이슬",
  nick: "Petit",
  birth: 1996,
  bio: "하이",
  location: "부천시",
};
const user1: User = {
  id: 2,
  name: "종현",
  nick: "JJong",
  birth: 1990,
  bio: "쁘띠",
  location: "혜화",
};
//타입별칭 사용의 원래 목적은?
type IContryCodes = {
  // korea: string;
  // UnitedState: string;
  // Brazil: string;
  [key: string]: string;
  //앞으로 추가될 요소의 타입의 형식도 동일한 패턴을 가진다고 예상될 때 타입별칭을 사용한다.
};

//=> 아래는 최초로 정의된 객체의 모습
const CountryCodes = {
  korea: "ko",
  UnitedState: "Us",
  Brazil: "Bz",
};

// 2)
