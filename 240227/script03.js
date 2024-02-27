window.onload = () => {
  const bgcount = 5;
  const randomNumber = Math.ceil(Math.random() * bgcount);
  document.body.style.background = url`(./images2/bg-${randomNumber}.jpg)`;
};
