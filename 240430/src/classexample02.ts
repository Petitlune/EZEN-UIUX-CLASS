// 실행 = implements : 부모로부터 받은 값은 반드시 구현해야하는 의무성!
//interface에서 많이 사용.

interface CharaterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Charater implements CharaterInterface {
  constructor(
    public name: string,
    public moveSpeed: number,
    private extra: string
  ) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동!`);
  }
}

const charaterA = new Charater("짱아", 50, "test");
console.log(charaterA);
charaterA.move();
