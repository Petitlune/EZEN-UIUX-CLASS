// scroll.js적용
$(function () {
  $(".scroll").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      800
    );
  });
  // parallax.js적용
  $(window).resize(function () {
    $(".container").width($(window).width()).height($(window).height());
    $(".content").each(function () {
      $(this)
        .css("margin-left", ($(this).width() / 2) * -1 + "px")
        .css("margin-top", ($(this).height() / 2) * -1 + "px");
    });
  });
  setTimeout(function () {
    $(window).resize();
  }, 0);
  $(".container").parallaxScroll({
    friction: 0.3,
  });
});
