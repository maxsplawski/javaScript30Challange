"use strict";

const panels = [...document.querySelectorAll(".panel")];

panels.forEach((panel) =>
  panel.addEventListener("click", function () {
    panel.classList.toggle("open");
  })
);

panels.forEach((panel) =>
  panel.addEventListener("transitionend", function (e) {
    if (e.propertyName === "font-size") this.classList.toggle("open-active");
  })
);
