import { tempest } from "./animation.js";
import { updateHeight } from "./mobile_vh.js";
import { menuHover } from "./menu_hover.js";

import { initAboutClick } from "./transitions/about.js";
import { initContactClick } from "./transitions/contact.js";

document.addEventListener("DOMContentLoaded", () => {
  updateHeight();
  tempest();
  menuHover("home");

  initAboutClick();
  initContactClick();
});
