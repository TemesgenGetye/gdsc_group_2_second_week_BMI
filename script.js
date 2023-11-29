"use strict";

function bmi(heigth, mass) {
  return `your BMI is ${mass / (heigth * heigth)}`;
}

const acceptMass = prompt("enetr your mass");
const acceptHeigth = prompt("enter your height");

console.log(bmi(acceptHeigth, acceptMass));
4;
