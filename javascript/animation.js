const tempest = () => {
  const dropRatio = 1000;
  const length = 75;
  const interval = 75;
  const angle = 35;
  const opacity = 0.2;
  const stroke = 2.5;

  const container = document.querySelector(".side");
  let height = parseInt(container.offsetHeight);
  let width = parseInt(container.offsetWidth);
  let drops = Math.round((dropRatio * (height * width)) / 450000);

  const canvas = document.getElementById("backgroundCanvas");
  const context = canvas.getContext("2d");

  canvas.setAttribute("height", height);
  canvas.setAttribute("width", width);

  let rain = [];

  const randomAttributes = index => {
    rain[index] = {};
    rain[index].posX = Math.random() * width;
    rain[index].posY = Math.random() * height;
    rain[index].angle = angle;
    rain[index].length = Math.random() * length;
    rain[index].opacity = Math.random() * opacity;
    rain[index].stroke = Math.random() * stroke;
  };

  const refresh = () => {
    height = parseInt(container.offsetHeight);
    width = parseInt(container.offsetWidth);
    canvas.setAttribute("height", height);
    canvas.setAttribute("width", width);
    drops = Math.round((dropRatio * (height * width)) / 450000);
    rain = [];

    Array(drops)
      .fill()
      .forEach((_, i) => {
        randomAttributes(i);
      });
  };
  window.addEventListener("resize", refresh);

  const createRain = index => {
    context.beginPath();
    context.moveTo(rain[index].posX, rain[index].posY);

    context.lineTo(
      rain[index].posX +
        rain[index].length * Math.sin((Math.PI * rain[index].angle) / 180),
      rain[index].posY +
        rain[index].length * Math.cos((Math.PI * rain[index].angle) / 180)
    );

    context.strokeStyle = `rgba(256, 256, 256, ${rain[index].opacity})`;
    context.lineWidth = rain[index].stroke;
    context.stroke();

    randomAttributes(index);
  };

  const drawRain = () => {
    context.clearRect(0, 0, width, height);

    Array(drops)
      .fill()
      .forEach((_, i) => {
        createRain(i);
      });
  };

  refresh();

  setInterval(drawRain, interval);
};

document.addEventListener("DOMContentLoaded", tempest);
