/* DOM OBJECTS */
const leftArrows = document.querySelectorAll(".left-slider-arrow");
const rightArrows = document.querySelectorAll(".right-slider-arrow");
/* DOM OBJECTS */

/* FOR EACHS */ 
leftArrows.forEach(leftArrow => addEvent('move-left', leftArrow));
rightArrows.forEach(rightArrow => addEvent('move-right', rightArrow));
/* FOR EACHS */ 

/* EVENT LISTENNER */
function addEvent(arrow, dom) {
    dom.addEventListenner('click', () => {
        moveSlider(arrow);
    })
}
/* EVENT LISTENNERS */

/* FUNCTIONS */
function moveSlider(arrow)  {
    console.log("You click at " + arrow);
}
/* FUNCTIONS */
moveSlider('move-left');
