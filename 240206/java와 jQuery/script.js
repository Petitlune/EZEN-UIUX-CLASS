// // jQuery 구현
// $(".stars .fas").click(function () {
//   $(this).addClass("active");
//   $(this).prevAll().addClass("active");
//   $(this).nextAll().removeClass("active");

//   //index는 순번을 의미
//   const num = $(this).index();
//   const starRate = num + 1;
//   $(".print").text(starRate);

//   if (starRate === 1) {
//     $(".print").html("별로에요!" + '<img src="./images/star-lv1.png"/>');
//   } else if (starRate === 2) {
//     $(".print").html("보통이에요!" + '<img src="./images/star-lv2.png"/>');
//   } else if (starRate === 3) {
//     $(".print").html("그냥 그래요!" + '<img src="./images/star-lv3.png"/>');
//   } else if (starRate === 4) {
//     $(".print").html("마음에 들어요!" + '<img src="./images/star-lv4.png"/>');
//   } else if (starRate === 5) {
//     $(".print").html("아주 좋아요!" + '<img src="./images/star-lv5.png"/>');
//   }
// });

// javascript 구현
const stars = document.querySelectorAll(".stars .fas");
const print = document.querySelector(".print");
console.log(stars);
console.log(print);
// 대괄호는 배열을 만든다는 뜻
const imgs = [
  "./imgaes/star-lv1.png",
  "./imgaes/star-lv2.png",
  "./imgaes/star-lv3.png",
  "./imgaes/star-lv4.png",
  "./imgaes/star-lv5.png",
];

Element.prototype.previousElementSiblingAll = function () {
  let siblings = [];
  let current = this.previousElementSibling;
  while (current !== null) {
    siblings.push(current);
    current = currnet.previousElementSibling;
  }
  return siblings;
};

stars.forEach((star) => {
  star.addEventListener("click", function () {
    stars.forEach(function (e) {
      e.classList.remove("active");
    });
    this.classList.add("active");
    const preStars = Array.from(this.previousElementSiblingAll());
    preStars.forEach(function (prestar) {
      prestar.classList.add("active");
    });
    const num = Array.from(stars).indexOf(this);

    const starRate = num + 1;
    if (starRate === 1) {
      print.innerHTML = '"별로에요!" <img src=${imgs[0]}>';
    } else if (starRate === 2) {
      print.innerHTML = '"보통이에요!" <img src=${imgs[1]}>';
    }
  });
});
