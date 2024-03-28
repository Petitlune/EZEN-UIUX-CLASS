anime({
  targets: "ul.menu li",
  translateX: 250,
  easing: "linear",
  loop: true,
  direction: "alternate",
  delay: anime.stagger(500),
  endDelay: anime.stagger(100), //스크립트에서 setTimeOut과 비슷하다 .
});
