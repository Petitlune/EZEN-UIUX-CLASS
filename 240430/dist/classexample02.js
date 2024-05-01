// 실행 = implements : 부모로부터 받은 값은 반드시 구현해야하는 의무성!
//interface에서 많이 사용.
class Charater {
    name;
    moveSpeed;
    extra;
    constructor(name, moveSpeed, extra) {
        this.name = name;
        this.moveSpeed = moveSpeed;
        this.extra = extra;
    }
    move() {
        console.log(`${this.moveSpeed} 속도로 이동!`);
    }
}
const charaterA = new Charater("짱아", 50, "test");
console.log(charaterA);
charaterA.move();
export {};
//# sourceMappingURL=classexample02.js.map