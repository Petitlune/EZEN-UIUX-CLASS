// const studentA = {
//   name: "David",
//   grade: "A+",
//   study() {
//     console.log("공부열심히!");
//   },
//   introduce() {
//     console.log("반갑습니다!");
//   },
// };

class Student {
  //인스턴스 객체에 생성될 키를 field라고 부른다 .
  name;
  age;
  grade;

  //constructor function => 생성자 함수
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  //method를 정의하는 법
  study() {
    console.log(`${this.name}님 열심히 공부하세요`);
  }
  introduce() {
    console.log("안녕하세요.");
  }
}

const studentA = new Student("David", "43", "A");
console.log(studentA.study());

//Class를 활용해서 Instance 객체를 생성하고자 할 때, 상속!
//Class를 생성 및 선언할 때에도 상속을 받을 수 있다.

//extends를 이용해 Student에 상속을 받는 StudentDeveloper 생성자 함수를 만들어볼 것이다.
class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(name, age, grade, favoriteSkill) {
    super(name, age, grade);
    this.favoriteSkill = favoriteSkill;
  }
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}
const studentC = new StudentDeveloper("kevin", "24", "B", "JS");
console.log(studentC.study());

// function Student(name, grade, age) {
//   this.name = name;
//   this.age = age;
//   this.grade = grade;
//   this.study = function () {
//     console.log(`${name}님 공부 열심히!`);
//   };
//   this.introduce = function () {
//     console.log(`${name}님 반갑습니다!`);
//   };
// }

// const studentB = new Student("petit", "29", "A+");
// const studentA = new Student("David", "43", "A+");
// console.log(studentB, studentA);
// studentB.study();
// studentB.introduce();
