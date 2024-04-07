fetch("list.json")
  .then((response) => response.json())
  .then((data) => displayItems(data));

const displayItems = (data) => {
  const container = document.querySelector("#container");
  container.innerHTML = data.map((item) => createHTMLString(item)).join("");
};
