const imgTag = document.querySelector("img");
let num = 1;

//return이 break 역할을 하고 있음.
const gallery = (direct) => {
  if (direct) {
    if (num === 9) return;
    num++;
  } else {
    if (num === 1) return;
    num--;
  }
  imgTag.setAttribute("src", `../images (1)/pic_${num}.jpg`);
};
