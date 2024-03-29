const path = anime.path(".svg path");

anime({
  targets: ".circle",
  translateX: path("x"),
  translateY: path("y"),
  easing: "linear",
  rotate: path("angle"),
  duration: 10000,
  loop: true,
});
