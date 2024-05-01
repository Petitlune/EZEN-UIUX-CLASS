// JS Class 반복적인 객체를 생성하고자 할 때 비효율성 감소

// const studentA = {
//   name: "짱구",
//   grade: "D+",
//   age: 7,
//   study() {
//     console.log("공부 하기 시러여.");
//   },
//   introduce() {
//     console.log("천방지축 짱구에여.");
//   },
// };

class Student {
  //필드
  name;
  grade;
  age;

  //생성자 함수
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  //매서드 = 함수
  study() {
    console.log("공부 안함");
  }
  introduce() {
    console.log(`안녕! ${this.name} 입니다`);
  }
}

const studentA = new Student("짱구", "D+", 7);
console.log(studentA.study());

// JS Class 생성 후 상속 가능, 부모 > 자식
class StudentDeveloper extends Student {
  //필드
  favoriteSkill;

  //생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age); //세개를 상속받아 오겠다.
    this.favoriteSkill = favoriteSkill;
  }

  //메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍함.`);
  }
}

const studentB = new StudentDeveloper("슛돌이", "B+", 20, "JS");

//TS class를 생성하거나 상속받는 개념은 동일, 접근제어자 + 타입정의만 상이함.
