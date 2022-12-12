/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateCardsButton() {
  // Get the selected number of cards from the dropdown
  const cardNumber = document.getElementById("cardnumber").value;

  // Define the array of suits outside of the for loop
  const suits = ["♦", "♥", "♣", "♠"];

  // Clear any existing cards
  document.getElementById("cards").innerHTML = "";

  // Generate the specified number of cards
  for (let i = 0; i < cardNumber; i++) {
    // Generate a random suit for the card
    const suit = suits[Math.floor(Math.random() * suits.length)];

    if (suit == "♦" || suit == "♥") {
      document.getElementsByClassName("topcardssymbol")[i].style.color = "red";
      document.getElementsByClassName("bottomcardssymbol")[i].style.color =
        "red";
    }

    // Generate a random number for the card
    const numbers = [
      "A",
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
      "K"
    ];
    const number = numbers[Math.floor(Math.random() * numbers.length)];

    // Create the card HTML as a string
    const cardHTML = `
      <div class="card-header d-flex justify-content-start pb-1" id="cardsymbol">
        <div class="topcardsymbol">${suit}</div>
      </div>
      <div class="d-flex justify-content-center" id="myNumber">${number}</div>
      <div class="card-footer d-flex justify-content-start pt-1" style="transform: rotate(-180deg);">
        <div class="bottomcardsymbol">${suit}</div>
      </div>
    `;

    // Create a new card div
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = cardHTML;

    // Append the card to the cards container
    document.getElementById("cards").appendChild(card);
  }
}
