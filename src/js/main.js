import "../css/style.css";

import "./request";
import updateUI from "./updateUI";

// meanings.definitions.definition
// console.log(data[0].meanings[1].definitions[0]);

const dropdownList = document.querySelector(".dropdown__list");
const closeBtn = document.getElementById("closeBtn");
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("closeBtn")) {
    dropdownList.classList.toggle("close");
  } else if (
    (!e.target.classList.contains("closeBtn") &&
      !e.target.classList.contains("dropdown__list")) ||
    !e.target.classList.contains("dropdown__item")
  ) {
    dropdownList.classList.add("close");
  }
});

const searchSelect = document.querySelectorAll(".dropdown__list li");
const modeSelect = document.querySelector(".modeSelect");
const searchEl = document.getElementById("search");
const body = document.querySelector("body");
const checkboxBtn = document.querySelector("#check-apple");
const verb = document.getElementById("verb");
const noun = document.getElementById("noun");

const modeFromLocal = localStorage.getItem("mode")
  ? localStorage.getItem("mode")
  : null;
if (modeFromLocal) {
  body.classList.add("dark-mode");
}

checkboxBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  modeFromLocal
    ? localStorage.setItem("mode", "")
    : localStorage.setItem("mode", "dark");
});

searchSelect.forEach((li) => {
  li.addEventListener("click", () => {
    modeSelect.innerHTML = li.textContent;
    if (li.textContent == "Serif") {
      modeSelect.classList.remove("sans");
      modeSelect.classList.remove("mono");
      modeSelect.classList.add("serif");
      noun.style.fontStyle = "inherit";
      verb.style.fontStyle = "inherit";
      body.style.fontFamily = "Lora Bold";
      searchEl.style.fontFamily = "Lora Bold";
    } else if (li.textContent == "Sans Serif") {
      modeSelect.classList.add("sans");
      modeSelect.classList.remove("mono");
      modeSelect.classList.remove("serif");
      body.style.fontFamily = "Inter";
      searchEl.style.fontFamily = "Inter";
      noun.style.fontStyle = "italic";
      verb.style.fontStyle = "italic";
    } else if (li.textContent == "Mono") {
      modeSelect.classList.remove("sans");
      modeSelect.classList.remove("serif");
      modeSelect.classList.add("mono");
      body.style.fontFamily = "Inconsolata";
      searchEl.style.fontFamily = "Inconsolata";
      noun.style.fontStyle = "inherit";
      verb.style.fontStyle = "inherit";
    }
  });
});
updateUI();
