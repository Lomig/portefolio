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

const menuHover = () => {
  const menuItems = document.querySelectorAll(".menu li");
  const container = document.querySelector(".container");

  menuItems.forEach(item => {
    initialize(item);
    if (container.dataset.page !== item.dataset.page) {
      item.addEventListener("mouseenter", onMouseEnterActive);
      item.addEventListener("mouseleave", onMouseLeaveActive);
    } else {
      item.classList.add("disabled");
    }
  });
};

export { menuHover };
