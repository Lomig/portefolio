let imageShown = false;

const onMouseEnterActive = e => {
  const menuItems = document.querySelectorAll(".menu li");
  const container = document.querySelector(".container");

  menuItems.forEach(item => {
    if (item !== e.target && item.dataset.page !== container.dataset.page) {
      item.classList.add("faded");
    }
  });
};

const onMouseLeaveActive = () => {
  const menuItems = document.querySelectorAll(".menu li");
  menuItems.forEach(item => {
    item.classList.remove("faded");
  });
};

const initialize = item => {
  item.classList.remove("disabled");
  item.classList.remove("faded");
  item.removeEventListener("mouseenter", onMouseEnterActive);
  item.removeEventListener("mouseleave", onMouseLeaveActive);
};

const menuHover = page => {
  if (page !== "home") {
    const canvas = document.getElementById("backgroundCanvas");
    clearInterval(canvas.dataset.interval);
    canvas.style.display = "none";
  }

  const menuItems = document.querySelectorAll(".menu li");

  menuItems.forEach(item => {
    initialize(item);
    if (page !== item.dataset.page) {
      item.addEventListener("mouseenter", onMouseEnterActive);
      item.addEventListener("mouseleave", onMouseLeaveActive);
    } else {
      item.classList.add("disabled");
    }
  });
};

const showImages = () => {
  if (imageShown) {
    return;
  }

  const backgrounds = document.querySelectorAll(".background");
  const contents = document.querySelectorAll(".content");

  backgrounds.forEach(background => {
    background.removeAttribute("style");
  });

  contents.forEach(content => {
    content.removeAttribute("style");
  });

  imageShown = true;
};

export { showImages, menuHover };
