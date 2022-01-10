"use strict";

const setDate = () => {
  const secHand = document.querySelector(".second-hand");
  const minHand = document.querySelector(".min-hand");
  const hrHand = document.querySelector(".hour-hand");
  const date = new Date();

  const secs = date.getSeconds();
  const secsDegrees = (secs / 60) * 360 - 90;
  //   console.log(secs);
  //   console.log(secsDegrees);

  secHand.style.transform = `rotate(${secsDegrees}deg)`;

  const mins = date.getMinutes();
  const minsDegrees = (mins / 60) * 360 - 90;
  //   console.log(minsDegrees);

  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hrs = date.getHours();
  const hrsDegrees = (hrs / 12) * 360 - 90;

  hrHand.style.transform = `rotate(${hrsDegrees}deg)`;
};

setInterval(setDate, 1000);
