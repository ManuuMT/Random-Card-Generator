import "bootstrap";
import "./style.css";

window.onload = function() {
  const cardSuit = document.querySelectorAll(".suit");
  const number = document.querySelector(".number");
  const buttons = document.querySelectorAll(".button");
  // This counter will let us know later how many cards left in the deck
  var counter = 52;

  // Card object constructor function
  function Card(suit, value, use) {
    this.suit = suit;
    this.value = value;
    this.use = use;
  }
  // Declares the arrays that we need to build our deck
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

  // Callback function that builds the deck
  let createDeck = () => {
    // A for within a for to create every value of every suit
    for (let i = 0; i < arrayOfValues.length; i++) {
      for (let j = 0; j < arrayOfSuits.length; j++) {
        // Instance of a new object (card)
        let myCard = new Card(arrayOfSuits[j], arrayOfValues[i], false);
        // Our new object myCard is pushed into an array of cards
        deckOfCards.push(myCard);
      }
    }
  };
  // Here it builds our deck for the first and only time
  createDeck();

  // 1st button - totally random card
  buttons[0].addEventListener("click", () => {
    // Picks a random card from the array of cards
    let random = Math.floor(Math.random() * (deckOfCards.length - 1));
    // Then calls the function that prints the cards
    // Passing the card chosen as parameter
    setCard(deckOfCards[random]);
  });

  // 2nd button - random card that no repeats the last number or suit
  buttons[1].addEventListener("click", () => {
    // Filters the deck removing all the cards with the actual suit
    let myCard = deckOfCards.filter(
      index => index.suit != cardSuit[0].innerHTML
    );
    // Then filters the deck again but with the actual value
    myCard = myCard.filter(index => index.value != number.innerHTML);
    // This console log shows all the cards that left in the deck after the filter
    console.log(myCard);
    // At last, it chooses a random card from the filtered deck
    let random = Math.floor(Math.random() * (myCard.length - 1));
    // Function that prints the cards
    setCard(myCard[random]);
  });

  // 3rd button - unique random card from the deck
  buttons[2].addEventListener("click", () => {
    // Filters the cards we already used
    let cardsNotUsed = deckOfCards.filter(index => index.use == false);

    // If there is at least 1 card
    if (cardsNotUsed.length > 0) {
      // It chooses a random card from the deck
      let random = Math.floor(Math.random() * (cardsNotUsed.length - 1));
      // Marks the card as "true" so we don't pick this card again
      cardsNotUsed[random].use = true;
      // Function that prints the cards
      setCard(cardsNotUsed[random]);
      // The counter that tell us how many cards left
      counter--;
      console.log(`Cards left in deck: ${counter}`);
    } else console.error("No more cards in deck");
  });

  // Callback function that prints the card on screen
  // It receives a card as parameter
  let setCard = objCard => {
    // Prints the value of the card
    number.innerHTML = objCard.value;
    // Prints the suit 2 times per card
    cardSuit[0].innerHTML = objCard.suit;
    cardSuit[1].innerHTML = objCard.suit;
    // Here it sets the class "heart" for red cards
    // Or "spade" for the black cards
    if (objCard.suit == "♦" || objCard.suit == "♥") {
      cardSuit[0].setAttribute("class", "suit heart");
      cardSuit[1].setAttribute("class", "suit heart");
    } else {
      cardSuit[0].setAttribute("class", "suit spade");
      cardSuit[1].setAttribute("class", "suit spade");
    }
  };
};
