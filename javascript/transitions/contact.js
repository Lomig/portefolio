import { menuHover } from "../menu.js";

const fade = (fadeout, fadein) => {
  fadeout.style.opacity = 1;

  const changeFadeoutOpacity = () => {
    fadeout.style.opacity = parseFloat(fadeout.style.opacity) - 0.02;
    fadein.style.zIndex = -2;

    if (fadeout.style.opacity < 0) {
      fadein.classList.add("active");
      fadein.style.zIndex = null;
      fadeout.classList.remove("active");
      fadeout.style.opacity = null;
    } else {
      window.requestAnimationFrame(changeFadeoutOpacity);
    }
  };

  changeFadeoutOpacity();
};

const onClicked = event => {
  const container = document.querySelector(".container");

  if (event.target.dataset.page === container.dataset.page) {
    return;
  }

  container.dataset.page = event.target.dataset.page;

  const activeBackground = document.querySelector(".background.active");
  const contactBackground = document.getElementById("background-contact");

  fade(activeBackground, contactBackground);

  const activeContainer = document.querySelector(".content.active");
  const currentContainer = document.getElementById("content-contact");
  currentContainer.classList.add("active");
  activeContainer.classList.remove("active");

  menuHover("contact");
};

const initContactClick = () => {
  const contactButton = document.getElementById("contact-button");

  contactButton.addEventListener("click", onClicked);
};

export { initContactClick };
