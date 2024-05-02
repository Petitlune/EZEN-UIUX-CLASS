//선언형으로 배열의 주요 메서드를 사용하기 위해서 알고 있어야하는 주요 개념. 깊은 복사와 얕은 복사
const original = 1;
let copied = original;

copied += 2;

console.log(original, copied);

//원시타입(number,string,boolean..)의 경우, 원래부터 태생적으로 깊은복사의 형식 => 따라서 복제가 되어진 데이터의 값을 바꾸더라도 원본 데이터값이 바뀌지 않는다.
