class Employee {
    name;
    age;
    position;
    //필드
    // protected name: string;
    // public age: number; //자동으로 public 이라는 접근제어자로 설정됨, public 생략 가능
    // public position: string;
    //생성자 함수
    constructor(name, //접근제어자를 쓰면 필드값 입력 대신 이렇게 단축해서 사용할 수 있다.
    age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.name = name;
        this.age = age;
        this.position = position;
    }
    //메서드
    work() {
        console.log("열심히 일함");
    }
}
const employeeA = new Employee("짱구", 7, "유치원생");
employeeA.work();
// employeeA.name = "피구왕통키";
employeeA.age = 26;
employeeA.position = "과장";
console.log(employeeA);
// 상속 = extends : 부모요소로부터 어떠한 값을 받을 수 있다는 전제를 설정하는 것이지, 반드시 상속받은 값을 구현해야할 의무X
// 실행 = implements : 부모로부터 받은 값은 반드시 구현해야하는 의무성!
class ExecutiveOfficer extends Employee {
    //필드 값은 그대로 상속 => super() 사용 안해도 됨
    func() {
        // protected라는 접근 제어자를 사용했기 때문에 상속받은 파생클래스 안에서는 사용 가능.
        console.log(`${this.name}`);
        console.log(`${this.age}`);
    }
}
export {};
// TS 접근제어자
// public : 모든 범위에서 접근할 수 있는 제어자 설정 (class의 생성 기존 세팅된 default 제어자)
// private : 클래스 내부 범위에서만 접근할 수 있는 제어자 설정
// protected : 클래스 내부 + 상속받은 파생 클래스에서만 접근할 수 있는 제어자 설정
//# sourceMappingURL=classexample.js.map