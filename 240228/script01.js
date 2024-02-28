//원기둥 부피 = 밑면적 x 높이
//밑면적 = 파이 x  ((지름 / 2)제곱)
//생성자 함수 혹은 class 활용해서 코드 작성
//<생성자 함수 만들기>

// function Cylinder(cyldiameter, cylheight) {
//   this.diameter = cyldiameter;
//   this.height = cylheight;
//   this.getVolume = function () {
//     let radius = this.diameter / 2;
//     return (Math.PI * radius * radius * this.height).toFixed(2);
//   };
// }
// const cylinder = new Cylinder(8, 10);
// console.log(`원기둥의 부피는 ${cylinder.getVolume()}입니다.`);
const form = document.querySelector("form");
const button = document.querySelector("input[type='submit']");
const result = document.querySelector("#result");
let diameter = document.querySelector("#cyl-diameter");
let height = document.querySelector("#cyl-height");

//class 함수 사용함
class Cylinder {
  constructor(cyldiameter, cylheight) {
    this.diameter = cyldiameter;
    this.height = cylheight;
  }
  getVolume = function () {
    let radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  };
}
form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(typeof diameter); //형변환 일어남.
  const diameterValue = diameter.value;
  const heightValue = height.value;
  console.log(typeof diameter);
  //예외조항 처리해주어여함. 값이 둘다 입력됐을 때만 정상적인결과값 도출
  if (diameterValue === "" || heightValue === "") {
    result.innerText = "지름과 높이값을 입력하세요";
  } else {
    //숫자로 형변환 해주어야함. parseInt
    const cylinder = new Cylinder(
      parseInt(diameterValue),
      parseInt(heightValue)
    );
    result.innerText = `원기둥의 부피는 ${cylinder.getVolume()}입니다.`;
  }
  diameter = "";
  height = "";
});
