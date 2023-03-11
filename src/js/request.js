import updataUi from "./updateUI";

const form = document.querySelector("#form");
const input = document.querySelector("#search");
const ups = document.querySelector(".ups");

input.focus();
const API = "https://api.dictionaryapi.dev/api/v2/entries/en/";

async function request(url) {
  const req = await fetch(url);
  const data = await req.json();
  return data;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const val = input.value.trim();
  if (val) {
    form.reset();
    request(API + val)
      .then((data) => {
        updataUi(data);
        console.log(data);
      })
      .catch(() => {
        error();
      });
  } else {
    setTimeout(() => {
      ups.style.display = "block";
      input.style.outlineColor = "red";
      details.innerHTML = "";
    });
    setTimeout(() => {
      ups.style.display = "none";
      input.style.outlineColor = "#a445ed";
    }, 2000);
  }
});

import { details } from "./updateUI";
import img from "../images/error.png";

function error() {
  details.innerHTML = "";
  details.innerHTML += `
    <div class="container found">
                <img src="${img}" alt=" ups new error" >
                <h2 class="defin">No Definitions Found</h2>
                <p>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</p>
    </div>
    `;
}
