import { tempest } from "./animation.js";
import { updateHeight } from "./mobile_vh.js";

import { showImages, menuHover } from "./menu.js";

import { initAboutClick } from "./transitions/about.js";
import { initSkillsClick } from "./transitions/skills.js";
import { initPortfolioClick } from "./transitions/portfolio.js";
import { initContactClick } from "./transitions/contact.js";

document.addEventListener("DOMContentLoaded", () => {
  updateHeight();
  tempest();

  showImages();
  menuHover("home");

  initAboutClick();
  initSkillsClick();
  initPortfolioClick();
  initContactClick();
});
