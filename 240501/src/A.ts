export class A {
  value: number = 1;
  method: () => void = function (): void {
    console.log(`value: ${this.value}`);
  };
}

//함수에서 매개변수의 타입을 지정하지 않으면 에러!!
//"noImplicitThis": false 추가해주면 에러 사라짐
