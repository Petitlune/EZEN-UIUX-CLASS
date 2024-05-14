const listWrap = document.querySelector(".list-box");
const buttons = document.querySelectorAll(".nav li");

const createBox = (data) => {
  data.forEach((it) => {
    console.log(it);
    const li = document.createElement("li");
    const name = document.createElement("span");
    const age = document.createElement("p");
    name.innerText = `${it.name} :`;
    age.innerText = it.age;
    li.className = "createList";
    li.append(name, age);
    listWrap.appendChild(li);
  });
};

fetch("./list.json")
  .then((response) => response.json())
  .then((data) => {
    let ageList = data.list;
    const over0 = ageList.filter((it) => {
      return it.age >= 20;
    });
    createBox(ageList);
    const over1 = ageList.filter((it) => {
      return it.age >= 30;
    });
    const over2 = ageList.filter((it) => {
      return it.age >= 40;
    });

    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        listWrap.innerHTML = "";
        if (index === 0) {
          createBox(over0);
        } else if (index === 1) {
          createBox(over1);
        } else if (index === 2) {
          createBox(over2);
        }
      });
    });
  });
