//xhr 방식
// const xhr = new XMLHttpRequest(); //데이터 좀 주세요 요청
// xhr.open("GET", "student-2.json", true); //get방식으로 json 파일 비동기 형식으로 찾아오겠다 라는 뜻
// xhr.send(); // 서버측에 위의 찾아온 데이터를 보낸다.
// console.log(xhr);

// const renderHTML = (contents) => {
//   let output = "";
//   for (let content of contents) {
//     output += `
//     <h2>${content.name}</h2>
//     <ul>
//     <li>전공: ${content.major}</li>
//     <li>학년: ${content.grade}</li>
//     </ul>
//     <hr/>
//     `;
//   }
//   document.querySelector("#result").innerHTML = output;
// };

// xhr.onreadystatechange = () => {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     const students = JSON.parse(xhr.responseText);
//     renderHTML(students);
//   }
// };

//위의 방식 안쓰고 API 방식으로 데이터 불러오는 경우가 훨씬 많음 fetch라는 API함수

fetch("student-2.json")
  .then((Response) => Response.json())
  .then((json) => {
    let output = "";
    json.forEach((student) => {
      output += `
          <h2>${student.name}</h2>
    <ul>
    <li>전공: ${student.major}</li>
    <li>학년: ${student.grade}</li>
    </ul>
    <hr/>
      `;
    });
    document.querySelector("#result").innerHTML = output;
  }); // 객체화 시켜주었다.
