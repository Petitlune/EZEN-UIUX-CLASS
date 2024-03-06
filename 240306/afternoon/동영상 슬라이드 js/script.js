const arrows = document.querySelectorAll(".arrow");

const videos = ["mv-1.mp4", "mv-2.mp4", "mv-3.mp4"];
const container = document.querySelector(".container");
console.log(container);

const newVideo = document.createElement("video");
const srcVideo = document.createAttribute("src");
const widthVideo = document.createAttribute("width");
const autoPlayVideo = document.createAttribute("autoplay");

srcVideo.value = `./videos/${videos[0]}`;
widthVideo.value = "700";
newVideo.setAttributeNode(srcVideo);
newVideo.setAttributeNode(widthVideo);
newVideo.setAttributeNode(autoPlayVideo);
container.appendChild(newVideo);

let i = 0;

arrows.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    if (e.target.id === "left") {
      i--;
      if (i < 0) {
        i = videos.length - 1; //중첩 if문 사용
      }
    } else if (e.target.id === "right") {
      i++;
      if (i >= videos.length) {
        i = 0;
      }
    }
    srcVideo.value = `./videos/${videos[i]}`;
  });
});
