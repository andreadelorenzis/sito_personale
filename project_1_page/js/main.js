
/* Global variables */
const scoreBoard = document.querySelector('.score-board');
const scoreBoardInner = document.querySelector('.score-board__inner');
const digit = document.querySelector('.score-board__digit');
let card = document.querySelector('.score-board__card');
const cardFaceFront = document.querySelector('.score-board__card-face--front');
const cardFaceBack = document.querySelector('.score-board__card-face--back');
const incrementBtn = document.querySelector('.buttons__increment');
const decrementBtn = document.querySelector('.buttons__decrement');
const resetBtn = document.querySelector('.buttons__reset');
let cardBaseFontSize;


if (window.innerWidth >= 1000) {
  cardBaseFontSize = 250;
} else {
  cardBaseFontSize = 190;
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
resetBtn.addEventListener('click', reset);

/* Function that increments the counter */
function increment () {
  if(digit.dataset.digitBefore < 9999) {

    /* Flip the card down */
    setTimeout(() => {
      card.classList.add('flipped-down');
    }, 20);

    /* Change the font of the digits depending on the size of the number */
    if(digit.dataset.digitBefore >= -10 &&
       digit.dataset.digitBefore < 10)
       setTimeout(() => {
        scoreBoard.style.fontSize = cardBaseFontSize + 'px';
      }, 260);
    if(digit.dataset.digitBefore >= 9 &&
       digit.dataset.digitBefore < 100)
       setTimeout(() => {
        scoreBoard.style.fontSize = (cardBaseFontSize - 60) + 'px';
      }, 260);
    if(digit.dataset.digitBefore >= 99 &&
       digit.dataset.digitBefore < 1000)
       setTimeout(() => {
        scoreBoard.style.fontSize = (cardBaseFontSize - 90) + 'px';
      }, 260);
    if(digit.dataset.digitBefore >= 999 &&
       digit.dataset.digitBefore < 10000)
       setTimeout(() => {
        scoreBoard.style.fontSize = (cardBaseFontSize - 110) + 'px';
      }, 260);

    /* Disable the buttons */
    incrementBtn.disabled = true;
    decrementBtn.disabled = true;
    resetBtn.disabled = true;
    incrementBtn.classList.add('clicked');

    /* When the transition ends */
    card.addEventListener('transitionend', function () {
      /* Increment previous number */
      digit.dataset.digitBefore++;
      card.childNodes[1].textContent = digit.dataset.digitBefore;

      /* Clone the card, flip the card up and replace it */
      const cardClone = card.cloneNode(true);
      cardClone.classList.remove('flipped-down');
      digit.replaceChild(cardClone, card);
      card = cardClone;

      /* Increment next number */
      digit.dataset.digitAfter++;
      card.childNodes[3].textContent = digit.dataset.digitAfter;

      /* Enable the buttons */
      incrementBtn.disabled = false;
      decrementBtn.disabled = false;
      resetBtn.disabled = false;
      incrementBtn.classList.remove('clicked');
    }, {once: true});
  }
}

/* Function that decrement the counter */
function decrement () {
  if (digit.dataset.digitBefore > -9999) {

    /* Change the font of the digits depending on the size of the number */
    if(digit.dataset.digitBefore <= 10 &&
       digit.dataset.digitBefore >= -9)
       setTimeout(() => {
        scoreBoard.style.fontSize = cardBaseFontSize + 'px';
      }, 260);
    if(digit.dataset.digitBefore <= -9 &&
       digit.dataset.digitBefore >= -99)
       setTimeout(() => {
        scoreBoard.style.fontSize = (cardBaseFontSize - 60) + 'px';
      }, 260);
    if(digit.dataset.digitBefore <= -99 &&
       digit.dataset.digitBefore >= -9999)
       setTimeout(() => {
        scoreBoard.style.fontSize = (cardBaseFontSize - 90) + 'px';
      }, 260);
    if(digit.dataset.digitBefore <= -99 &&
       digit.dataset.digitBefore >= -9999)
       setTimeout(() => {
        scoreBoard.style.fontSize = (cardBaseFontSize - 110) + 'px';
      }, 260);

    /* Disable the buttons */
    incrementBtn.disabled = true;
    decrementBtn.disabled = true;
    resetBtn.disabled = true;
    decrementBtn.classList.add('clicked');

    /* Decrement next number */
    digit.dataset.digitAfter--;
    card.childNodes[3].textContent = digit.dataset.digitAfter;

    /* Clone the card, flip the card down and replace it */
    const cardClone = card.cloneNode(true);
    cardClone.classList.add('flipped-down');
    digit.replaceChild(cardClone, card)
    card = cardClone;

    /* Decrement previous number */
    digit.dataset.digitBefore--;
    card.childNodes[1].textContent = digit.dataset.digitBefore;

    /* Flip the card up */
    setTimeout(() => {
      card.classList.remove('flipped-down');
    }, 20)

    /* When the transition ends */
    card.addEventListener('transitionend', function () {

      /* Enable the buttons */
      incrementBtn.disabled = false;
      decrementBtn.disabled = false;
      resetBtn.disabled = false;
      decrementBtn.classList.remove('clicked');
    }, {once: true});
  }
}

/* Function that resets the counter */
function reset () {

  /* Set the base font size */
  setTimeout(() => {
   scoreBoard.style.fontSize = cardBaseFontSize;
 }, 260);

  /* Disable the buttons */
  incrementBtn.disabled = true;
  decrementBtn.disabled = true;
  resetBtn.disabled = true;
  resetBtn.classList.add('clicked');

  /* Set the next number equal to the previous number */
  digit.dataset.digitAfter = digit.dataset.digitBefore;
  card.childNodes[3].textContent = digit.dataset.digitAfter;

  /* Clone the card, flip the card down and replace it */
  const cardClone = card.cloneNode(true);
  cardClone.classList.add('flipped-down');
  digit.replaceChild(cardClone, card);
  card = cardClone;

  /* Set the previous number to zero */
  digit.dataset.digitBefore = 0;
  card.childNodes[1].textContent = 0;

  /* Flip the card up */
  setTimeout(() => {
    card.classList.remove('flipped-down');
  }, 20)

  /* When the transition ends */
  card.addEventListener('transitionend', function () {

    /* Set the next number to one */
    digit.dataset.digitAfter = 1;
    card.childNodes[3].textContent = 1;

    /* Enable the buttons */
    incrementBtn.disabled = false;
    decrementBtn.disabled = false;
    resetBtn.disabled = false;
    resetBtn.classList.remove('clicked');
  }, {once: true});
}
