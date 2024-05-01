// 추상 클래스 : 여러개의 사물이나 개념의 공통적인 요소를 추출해서 만들어내는 개념!
// 공통적인 속성을 가지고 있는 서로 다른 요소의 객체를 만들어야하는 경우
// 단, 추상 클래스가 되려면 반드시 공통적인 속성 및 메서드가 한개 이상 존재해야한다.
class Developer {
    dringk() {
        console.log("drink");
    }
}
// 추상클래스도 "클래스"
// 클래스들 처럼 인스턴스를 만들어낼 수 있을까?
// const dev01 = new Developer();
// 추상클래스도 클래스인것은 맞지만 일반적인 클래스처럼 인스턴스를 만들어 낼 수 없다.
class FrontEndDeveloper extends Developer {
    coding() {
        ("developer");
    }
    design() {
        console.log("design");
    }
}
const dev = new FrontEndDeveloper();
dev.coding();
dev.design();
export {};
//# sourceMappingURL=developer.js.map