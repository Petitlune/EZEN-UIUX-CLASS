$("nav a").click(function (e) {
  e.preventDefault();
  $.scrollTo(this.hash || 0, 1500);
});
