const sizes = document.querySelectorAll(".size span");
const colors = document.querySelectorAll(".color span");
const like = document.querySelector(".like");

// sizes.forEach((size) => {
//   size.addEventListener("click", function() {
//     function sibling(e) {
//       const children = e.parentElement.children;
//       fot (let i = 0; i < children.length; i++) {
//         children[i].classList.remove("active");
//       }
//     }
//   })
// })
like.addEventListener("click", () => {
  like.classList.toggle("active");
});
