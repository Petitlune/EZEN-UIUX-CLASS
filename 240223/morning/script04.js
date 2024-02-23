const newImg = document.createElement("img");
//속성을 만든다.
const srcNode = document.createAttribute("src");
srcNode.value =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2cWvyutAmlZaw_aqpwdbMgrgaBqj_JDbBWA&usqp=CAU";
//속성은 uppendChild 방식으로 붙일 수 없다. 속성은 동등한 조건의 역할
newImg.setAttributeNode(srcNode);
document.body.appendChild(newImg);
newImg.style.width = "800px";
console.log(newImg);
