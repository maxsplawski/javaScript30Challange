"use strict";

const inputs = document.querySelectorAll(".controls input");

// const handleUpdate = (e) => {
//   const data = e.target.dataset.sizing || "";
//   console.log(data);
// };

function handleUpdate() {
  const data = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + data
  );
}

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
