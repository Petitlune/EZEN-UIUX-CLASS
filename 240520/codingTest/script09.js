// 빈 변수 만들고 사용자가 입력한 문자열의 문자를 하나씩 추출해서 특정 문자인지 아닌지를 반복해서 검사. 검사 완료 후 사용자가 입력한 문자와 같으면 0 넣어주고 아니면 증감연산자로 숫자 증가시킨 후 빈변수에 대입
//좌측을 기준으로 특정문자가 아닌경우 무한으로 값이 증가!!! 위와 같은 행위를 정반대측면 (인덱스가 가장 큰 영역부터 다시 문자열 검사) 수학 객체에서 min 메서드 활용해서 최종 결과값 도출
const word = prompt("문자열");

const letter = prompt("문장 속 알파벳");

const solution = (word, letter) => {
  let answer = [];
  let p = Number.MAX_SAFE_INTEGER;
  for (let x of word) {
    if (x === letter) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
    console.log(answer);
  }
  p = Number.MAX_SAFE_INTEGER;
  for (let i = word.length - 1; i >= 0; i--) {
    if (word[i] === letter) {
      p = 0;
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
};

console.log(solution(word, letter));
// degree

// ==> 1 0 1 1 0 0
