const rating_btns = document.querySelectorAll(".btn--rating");
const submit_btn = document.querySelector(".btn--submit");
const card_rating = document.querySelector(".card__rating");
const card_rating_state = document.querySelector(".card__body--rating-state");
const card_thanks_state = document.querySelector(".card__body--thanks-state");
let rate = 5;
rating_btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    rate = e.target.attributes.rate.value;
  });
});
submit_btn.addEventListener("click", () => {
  card_rating.innerText = `you selected ${rate} out of 5`;
  card_rating_state.classList.toggle("card__body--hide");
  card_thanks_state.classList.toggle("card__body--hide");
});
