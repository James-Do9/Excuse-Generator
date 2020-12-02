/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//window.onload = function() {
//console.log("Hello Rigo from the console!");
//};
const excuseGenerator = () => {
  let subject = [
    "My dad",
    "My mom",
    "My friend",
    "My neighbor",
    "My girlfriend",
    "My boyfriend",
    "My aunt",
    "My uncle",
    "My cousin"
  ];
  let action = [
    " obliterated",
    " crumbled",
    " threw away",
    " sold",
    " lost",
    " forgot",
    " modified",
    " used"
  ];
  let object = [
    " my keys",
    " my car",
    " my I.D",
    " my wallet",
    " my paperwork",
    " my pen",
    " my cup of coffee",
    " my computer",
    " my phone"
  ];
  let when = [
    " at three o'clock in the morning!",
    " yesterday!",
    " a couple of days ago!",
    " a minute ago!",
    " today.",
    " just now!",
    " before the meeting!"
  ];
  let result =
    subject[Math.floor(Math.random() * subject.length)] +
    action[Math.floor(Math.random() * action.length)] +
    object[Math.floor(Math.random() * object.length)] +
    when[Math.floor(Math.random() * when.length)];
  return result;
};

document.querySelector(
  "#the-excuse"
).innerHTML = `<h1> ${excuseGenerator()} </h1>`; //make sure to use id = "the-excuse"
