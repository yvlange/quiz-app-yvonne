import { data } from "./lib/db.js";
import { createCard } from "./lib/card.js";

const content = document.querySelector(".content-grid");

for (let i = 0; i < data.length; i++) {
  const cardSection = createCard(data[i]);
  content.append(cardSection);
}

function myFunction() {
    let element = document.querySelector("body");
    element.classList.toggle("dark-mode");}

