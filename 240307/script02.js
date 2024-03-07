const xhr = new XMLHttpRequest();
xhr.open("GET", "json02.json", true);
xhr.send();

const renderHTML = (json02) => {
  let output = "";
  json02.forEach((json) => {
    output += `<h2>${json.name}</h2>
    <ul><li>전공 : ${json.major}</li>
    <li>학년 : ${json.grade}</li>
    </ul>
    <hr/>`;
  });
  document.querySelector("#result").innerHTML = output;
};

xhr.onreadystatechange = () => {
  if (xhr.readyState == 4 && xhr.status == 200) {
    const json02 = JSON.parse(xhr.responseText);
    // console.log(json02);
    renderHTML(json02);
  }
};
