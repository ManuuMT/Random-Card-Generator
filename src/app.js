/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  const card = document.querySelector(".card");
  const cardSuit = document.querySelectorAll(".suit");
  const number = document.querySelector(".number");
  const buttons = document.querySelector(".button");

  function setCard() {
    cardSuit[0].innerHTML = "♣";
    cardSuit[1].innerHTML = "♣";
    number.innerHTML = "K";
  }

  buttons.addEventListener("click", () => {
    setCard();
  });
};
