const name = prompt("당신의 이름을 입력해주세요");
const height = Number(prompt("키를 입력하세요"));
const weight = Number(prompt("몸무게를 입력하세요"));
const normal = (height - 100) * 0.9;
let result = weight >= normal - 5 && weight <= normal + 5;
result = result ? "적정체중이시네요 축하드립니다" : "조금만 더 노력해주세요";
document.write(`${name}님 ${result}`);
