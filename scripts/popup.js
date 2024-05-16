/* [<DOM> ELEMENTS] */
const background = document.querySelector('#background-filter');
const section = document.querySelector('#background-filter-section');
const container = document.querySelector('#login-container');
const button = document.querySelector('#login-buttom');
/* [<DOM> ELEMENTS] */

/* [STARTER CONFIG] */
closePopup();
/* [STARTER CONFIG] */

/* [<EVENT LISTENERS>] */
button.addEventListener('click', () => openPopup());
background.addEventListener('click', () => closePopup());
/* [<EVENT LISTENERS>] */

/* INTERACTIVE <FUNCTIONS> */
function openPopup() {
  background.style.display = 'flex';
  section.style.display = 'block';
  container.style.display = 'flex'
}
function closePopup() {
  background.style.display = 'none';
  container.style.display = 'none'
  section.style.display = 'none';
}
/* INTERACTIVE <FUNCTIONS> */
