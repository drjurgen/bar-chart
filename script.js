"use strict";
const arr = [];
const allBars = document.querySelectorAll(".bar");
const queueSize = getNumberOfCustomers();

for (let i = 0; i < 40; i++) {
  arr.push(getNumberOfCustomers());
}

callBothFunctions();

function callBothFunctions() {
  data();
  addNewValue();

  setTimeout(function () {
    callBothFunctions();
  }, 1000);
}

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}

function data() {
  for (let i = 0; i < 40; i++) {
    allBars[i].style.height = arr[i] * 10 + "px";
  }
}

function addNewValue() {
  arr.push(getNumberOfCustomers());
  arr.shift();
  console.log("latest queue number:", arr[39]);
}
