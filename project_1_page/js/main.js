
const digit = document.querySelector('.digit');
const flipCounter = document.querySelector('.flip-clock');
const flipCounterContainer = document.querySelector('.flip-clock-container');
const cardFaceFront = document.querySelector('.card-face-front');
const cardFaceBack = document.querySelector('.card-face-back');
const incrementBtn = document.querySelector('.increment-btn');
const decrementBtn = document.querySelector('.decrement-btn');
const resetBtn = document.querySelector('.reset-btn');
let card = document.querySelector('.card');
let cardBaseFontSize;

if (window.innerWidth > 1000) {
  cardBaseFontSize = 250;
} else {
  cardBaseFontSize = 190;
}

// initializer
(function () {
  incrementBtn.addEventListener('click', increment);
  decrementBtn.addEventListener('click', decrement);
  resetBtn.addEventListener('click', reset);
})();

function increment () {
  if(digit.dataset.digitBefore < 9999) {
    setTimeout(() => {
      card.classList.add('flipped-down');
    }, 20)
    if(digit.dataset.digitBefore >= -10 &&
       digit.dataset.digitBefore < 10)
       setTimeout(() => {
        flipCounterContainer.style.fontSize = cardBaseFontSize + 'px';
      }, 260);
    if(digit.dataset.digitBefore >= 9 &&
       digit.dataset.digitBefore < 100)
       setTimeout(() => {
        flipCounterContainer.style.fontSize = (cardBaseFontSize - 60) + 'px';
      }, 260);
    if(digit.dataset.digitBefore >= 99 &&
       digit.dataset.digitBefore < 1000)
       setTimeout(() => {
        flipCounterContainer.style.fontSize = (cardBaseFontSize - 90) + 'px';
      }, 260);
    if(digit.dataset.digitBefore >= 999 &&
       digit.dataset.digitBefore < 10000)
       setTimeout(() => {
        flipCounterContainer.style.fontSize = (cardBaseFontSize - 110) + 'px';
      }, 260);

    incrementBtn.disabled = true;
    decrementBtn.disabled = true;
    resetBtn.disabled = true;
    incrementBtn.classList.add('clicked');

    card.addEventListener('transitionend', function () {
      digit.dataset.digitBefore++;
      card.childNodes[1].textContent = digit.dataset.digitBefore;

      const cardClone = card.cloneNode(true);
      cardClone.classList.remove('flipped-down');
      digit.replaceChild(cardClone, card);
      card = cardClone;

      digit.dataset.digitAfter++;
      card.childNodes[3].textContent = digit.dataset.digitAfter;

      incrementBtn.disabled = false;
      decrementBtn.disabled = false;
      resetBtn.disabled = false;
      incrementBtn.classList.remove('clicked');
    }, {once: true});
  }
}

function decrement () {
  if (digit.dataset.digitBefore > -9999) {

    if(digit.dataset.digitBefore <= 10 &&
       digit.dataset.digitBefore >= -9)
       setTimeout(() => {
        flipCounterContainer.style.fontSize = cardBaseFontSize + 'px';
      }, 260);
    if(digit.dataset.digitBefore <= -9 &&
       digit.dataset.digitBefore >= -99)
       setTimeout(() => {
        flipCounterContainer.style.fontSize = (cardBaseFontSize - 60) + 'px';
      }, 260);
    if(digit.dataset.digitBefore <= -99 &&
       digit.dataset.digitBefore >= -9999)
       setTimeout(() => {
        flipCounterContainer.style.fontSize = (cardBaseFontSize - 90) + 'px';
      }, 260);
    if(digit.dataset.digitBefore <= -99 &&
       digit.dataset.digitBefore >= -9999)
       setTimeout(() => {
        flipCounterContainer.style.fontSize = (cardBaseFontSize - 110) + 'px';
      }, 260);

    incrementBtn.disabled = true;
    decrementBtn.disabled = true;
    resetBtn.disabled = true;
    decrementBtn.classList.add('clicked');

    digit.dataset.digitAfter--;
    card.childNodes[3].textContent = digit.dataset.digitAfter;

    const cardClone = card.cloneNode(true);
    cardClone.classList.add('flipped-down');
    digit.replaceChild(cardClone, card)
    card = cardClone;

    digit.dataset.digitBefore--;
    card.childNodes[1].textContent = digit.dataset.digitBefore;

    setTimeout(() => {
      card.classList.remove('flipped-down');
    }, 20)

    card.addEventListener('transitionend', function () {
      incrementBtn.disabled = false;
      decrementBtn.disabled = false;
      resetBtn.disabled = false;
      decrementBtn.classList.remove('clicked');
    }, {once: true});
  }
}

function reset () {
  setTimeout(() => {
   flipCounterContainer.style.fontSize = cardBaseFontSize;
 }, 260);

  incrementBtn.disabled = true;
  decrementBtn.disabled = true;
  resetBtn.disabled = true;
  resetBtn.classList.add('clicked');

  digit.dataset.digitAfter = digit.dataset.digitBefore;
  card.childNodes[3].textContent = digit.dataset.digitAfter;

  const cardClone = card.cloneNode(true);
  cardClone.classList.add('flipped-down');
  digit.replaceChild(cardClone, card);
  card = cardClone;

  digit.dataset.digitBefore = 0;
  card.childNodes[1].textContent = 0;

  setTimeout(() => {
    card.classList.remove('flipped-down');
  }, 20)

  card.addEventListener('transitionend', function () {
    digit.dataset.digitAfter = 1;
    card.childNodes[3].textContent = 1;
    incrementBtn.disabled = false;
    decrementBtn.disabled = false;
    resetBtn.disabled = false;
    resetBtn.classList.remove('clicked');
  }, {once: true});
}
