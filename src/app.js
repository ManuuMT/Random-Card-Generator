import "bootstrap";
import "./style.css";

window.onload = function() {
  const cardSuit = document.querySelectorAll(".suit");
  const number = document.querySelector(".number");
  const buttons = document.querySelectorAll(".button");
  var counter = 52;

  function Card(suit, value, use) {
    this.suit = suit;
    this.value = value;
    this.use = use;
  }

  const deckOfCards = [];
  let arrayOfSuits = ["♦", "♥", "♣", "♠"];
  let arrayOfValues = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let createDeck = () => {
    for (let i = 0; i <= 12; i++) {
      for (let j = 0; j < 4; j++) {
        let myCard = new Card(arrayOfSuits[j], arrayOfValues[i], false);
        deckOfCards.push(myCard);
      }
    }
  };

  createDeck();

  buttons[0].addEventListener("click", () => {
    let random = Math.floor(Math.random() * (deckOfCards.length - 1));
    setCard(deckOfCards[random]);
  });

  buttons[1].addEventListener("click", () => {
    let myCard = deckOfCards.filter(
      index => index.suit != cardSuit[0].innerHTML
    );
    myCard = myCard.filter(index => index.value != number.innerHTML);
    console.log(myCard);
    let random = Math.floor(Math.random() * (myCard.length - 1));
    setCard(myCard[random]);
  });

  buttons[2].addEventListener("click", () => {
    let cardsNotUsed = deckOfCards.filter(index => index.use == false);

    if (cardsNotUsed.length > 0) {
      let random = Math.floor(Math.random() * (cardsNotUsed.length - 1));
      cardsNotUsed[random].use = true;
      setCard(cardsNotUsed[random]);
      counter--;
      console.log(`Cards left in deck: ${counter}`);
    } else console.error("No more cards in deck");
  });

  function setCard(objCard) {
    number.innerHTML = objCard.value;

    cardSuit[0].innerHTML = objCard.suit;
    cardSuit[1].innerHTML = objCard.suit;

    if (objCard.suit == "♦" || objCard.suit == "♥") {
      cardSuit[0].setAttribute("class", "suit heart");
      cardSuit[1].setAttribute("class", "suit heart");
    } else {
      cardSuit[0].setAttribute("class", "suit spade");
      cardSuit[1].setAttribute("class", "suit spade");
    }
  }
};
