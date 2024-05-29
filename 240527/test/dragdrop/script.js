const imgBox = document.querySelector(".imageBox");

imgBox.addEventListener("dragover", (e) => {
  e.preventDefault();
  imgBox.classList.add("on");
});
imgBox.addEventListener("dragleave", (e) => {
  e.preventDefault();
  imgBox.classList.remove("on");
});

imgBox.addEventListener("drop", (e) => {
  e.preventDefault();
  console.log(e.dataTransfer.files);
  imgBox.classList.remove("on");
  const fileItem = e.dataTransfer.files;
  displayImg(fileItem);
});

const displayImg = (fileItem) => {
  const imgList = [];
  const fileNum = fileItem.length;

  for (let i = 0; i < fileNum; i++) {
    if (fileItem[i].type.match("image/.*") === false) {
      return;
    }
    imgList.push(fileItem[i]);
  }

  const imgUploadArea = document.querySelector(".imageUploadArea");

  for (let item of imgList) {
    const fileread = new FileReader();
    fileread.readAsDataURL(item);
    fileread.addEventListener("load", (e) => {
      const image = new Image();
      let imgSrc = e.target.result;
      image.setAttribute("src", imgSrc);
      imgUploadArea.appendChild(image);
    });
  }
};
