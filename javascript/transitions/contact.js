import { menuHover } from "../menu_hover.js";

const fade = (fadeout, fadein) => {
  fadeout.style.opacity = 1;

  fadein.style.zIndex = -2;
  fadein.style.display = "block";

  const changeFadeoutOpacity = () => {
    fadeout.style.opacity = parseFloat(fadeout.style.opacity) - 0.02;

    if (fadeout.style.opacity < 0) {
      fadeout.style.display = "none";
      fadein.style.zIndex = -1;
    } else {
      window.requestAnimationFrame(changeFadeoutOpacity);
    }
  };

  changeFadeoutOpacity();
};

const onContactClicked = event => {
  const container = document.querySelector(".container");

  if (event.target.dataset.page === container.dataset.page) {
    return;
  }

  const activeBackground = document.querySelector(".background.active");
  const contactBackground = document.getElementById("background-contact");

  container.dataset.page = event.target.dataset.page;
  fade(activeBackground, contactBackground);
  menuHover();
};

const initContactClick = () => {
  const contactButton = document.getElementById("contact-button");

  contactButton.addEventListener("click", onContactClicked);
};

export { initContactClick };
