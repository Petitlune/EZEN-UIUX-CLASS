const bookTitle = document.querySelectorAll(".book-tit");
const bookTitleHover = document.querySelectorAll("#book-tit-hover ");
console.log(bookTitle[0].innerText);

bookTitle.forEach((item, i) => {
  bookTitleHover.forEach((it, idx) => {
    it[idx].innerText += item[i].innerText;
  });
});
