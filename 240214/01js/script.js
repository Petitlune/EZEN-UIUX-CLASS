// let arr = [1, 2, 3, 4];
// let arrStr = ["a", "b", "c"];
// let arr01 = [];
// index & length
//배열의 아이템 갯수 찾아오기 위함.
//유일무이한 값을 저장하고 저장하고 관리하고 싶은 경우 사용!
//비교 연산자 => 서로다른 피연산자를 비교할 때 사용하는 연산자

//e-commerce =쇼핑몰
//회원들의 개인정보 =>
// let var1 = Symbol();
// let var2 = Symbol();

// let id = Symbol();
// member01.id = 6789;
// const member01 = {
//   name: "Kim",
//   [id]: 12345,
// };

// const member02 = {
//   name: "Park",
//   id: "12345",
// };
// let grade = Symbol("grade");
// member01[grade] = "VIP";
// console.log(member01);
// console.log(member02);

//------------문자를 숫자로 바꾸기

//Number( ) : 매개변수로 들어오는 값을 무조건 숫자로 형변환
// let str = "20";
// let num = 10;
// let result = Number(str) + num;
// console.log(result);

// let result01 = str - num;
// console.log(result01);

// console.log(Number(false));
// console.log(Number("20"));
//Number() VS parseInt() VS parseFloat() ==> number는 나머지 두가지를 다 커버한다.
// const userAge = Number(prompt("당신의 나이를 입력하세요."));

// console.log(typeof userAge);
//소괄호 안에 들어온 값을 무조건 다 숫자로 바꿀 수 없음!  숫자를 => 정수(소수점이 없는 값)로 바꿔주는 역할
// console.log(parseInt(false));
// 소괄호 안에 들어온 값을 실수의 형태로 바꿔주는 역할
// const userHot = parseFloat(prompt("당신의 체온을 입력해주세요"));
// console.log(userHot);

// =================숫자를 문자로 바꾸기
// let num = null;
// console.log(typeof num.toString());

// console.log(typeof String(null));
//null & undefined

//값이 단 하나라도 존재하면 true
// console.log(Boolean(5));

//사용자에게 화씨온도를 받아서 섭씨온도로 변환시킨 후 웹 브라우저 화면에 섭씨 온도를 출력해주세요.

const fah = Number(prompt("화씨온도를 입력하세요"));
const cel = ((fah - 32) / 1.8).toFixed(2);
document.write(`화씨 ${fah}도는 섭씨 ${cel}도 입니다.`);
80;
