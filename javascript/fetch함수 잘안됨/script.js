fetch("./list.json")
  .then((response) => response.json())
  .then((json) => json.items);
console.log(items);
const createItems = (items) => {
  const box = document.querySelector("#container");
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  const tit = document.createElement("span");
  const item = document.createElement("span");
  const price = document.createElement("span");

  tit = items.product;

  ul.className = "content";
  li.className = "product";
  li.append(tit, item, price);
  ul.appendChild(li);
  box.appendChild(ul);
};
