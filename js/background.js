window.onload = function () {
  const body = document.querySelector('.body');
  const images = ['./images/bg1.jpg', './images/bg2.jpg', './images/bg3.jpg', './images/bg4.jpg', './images/bg5.jpg'];
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  console.log(chosenImage);
  body.style.backgroundImage = `url('${chosenImage}')`;
  console.log(body.style.backgroundImage);
};
