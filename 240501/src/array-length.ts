// 제네릭(*generics) 타입 : 종합적인 타입!!!
// 종합병원 = General(종합적인) Hospital
// 배열의 타입을 정의하는데, 배열안에 들어가야하는 타입이 한가지의 종류가 아닌경우, 그리고 배열 내 들어가야하는 타입의 형태가 변환된느 경우!!!
// 제네릭 타입은 꼭 배열에만 쓰여야하는 것은 아니다. => 함수에서도 사용가능!

//타입변수 => 아직 자료의 형태가 결정되지 않은 경우, 일단 변수를 통해서 타입의 자리에 임시적으로 놓는 것을 의미
//타입변수는 보통 T로 작성, 문장 안에 타입변수가 작성되었다는 선언 => <타입변수>
export const arrayLength = <T>(array: T[]): number => array.length;

//정석적으로는 arrayLength<T>(array) 뒤쪽에도 타입선언 해주어야 함.
export const isEmpty = <T>(array: T[]): boolean => arrayLength<T>(array) === 0;
