/* [<DOM> ELEMENTS] */
const popup = document.querySelector(".popup-section")
const background = document.querySelector(".background-filter")
const button = document.querySelector(".login-button")
/* [<DOM> ELEMENTS] */

/* [STARTER CONFIG] */
/* [STARTER CONFIG] */

/* [<EVENT LISTENERS>] */
button.addEventListener("click", openPopup)
background.addEventListener("click", closePopup)
/* [<EVENT LISTENERS>] */

/* INTERACTIVE <FUNCTIONS> */
function openPopup() {
  popup.classList.remove("hidden")
}
function closePopup() {
  popup.classList.add("hidden")
}
/* INTERACTIVE <FUNCTIONS> */
