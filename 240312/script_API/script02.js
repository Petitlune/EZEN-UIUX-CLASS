//fetch함수로 외부에서 데이터 가져오기

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((user) => console.log(user));

//async 함수로 외부에서 데이터 가져오기 (더 많이 사용함)

const dispaly = (user) => {
  const result = document.querySelector("#result");
  let string = "";
  user.forEach((item) => {
    string += `
<table>
<tr>
<th>이름</th>
<td>${item.name}</td>
</tr>
<tr>
<th>아이디</th>
<td>${item.username}</td>
</tr>
<tr>
<th>이메일</th>
<td>${item.email}</td>
</tr>
</table>

    `;
  });
  result.innerHTML = string;
};

async function init() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const user = await response.json();
  dispaly(user);
}

init();
