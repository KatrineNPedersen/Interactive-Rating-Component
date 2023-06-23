"use strict";
const ratingNumber = document.querySelectorAll(".rating");
const submitButton = document.querySelector("button");
const ratingState = document.querySelector(".rating-state");
const thankYouState = document.querySelector(".thank-you-state");
const selectedRating = document.querySelector(".selected-rating");
const selection = document.querySelector(".selection");

function clickedRating() {
  ratingNumber.forEach((number) => {
    number.addEventListener("click", function () {
      ratingNumber.forEach((number) => {
        number.classList.remove("clicked");
      });
      number.classList.add("clicked");
      let selectedNumber = number.textContent;

      selection.innerHTML = `You selected ${selectedNumber} out of 5</p>`;
    });
  });
}
clickedRating();

function submitRating() {
  submitButton.addEventListener("click", function () {
    ratingNumber.forEach((number) => {
      let hasRating = number.classList.contains("clicked");
      if (hasRating) {
        ratingState.classList.add("hidden");
        thankYouState.classList.remove("hidden");
      }
    });
  });
}
submitRating();
