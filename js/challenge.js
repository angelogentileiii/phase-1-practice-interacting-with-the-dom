const numberCounterElement = document.getElementById('counter');
const minusButtonElement = document.getElementById('minus');
const plusButtonElement = document.getElementById('plus');
const heartButtonElement = document.getElementById('heart');
const pauseButtonElement = document.getElementById('pause');
const commentFormElement = document.getElementById('comment-form');
const commentFormInput = document.getElementById('comment-input');

let currentCounterAmount = 0;
let numberCounter;
let counterStart;

// currently works but takes two clicks to register ahead of the constant counter

minusButtonElement.addEventListener('click', decreaseCounter)

plusButtonElement.addEventListener('click', increaseCounter)


function increaseCounter(){
    numberCounterElement.textContent = currentCounterAmount++
}

function decreaseCounter(){
    numberCounterElement.textContent = currentCounterAmount--
}

function startNumberCounter(){
       numberCounterElement.textContent = currentCounterAmount++
}

function startCounter(){
    console.log('resumed');

    // set the let variable within the scope of the function so it is
    // reset with each re-toggle of the start/stop button

    counterStart = setInterval(startNumberCounter, 1000);
    pauseButtonElement.removeEventListener('click', startCounter);
    pauseButtonElement.addEventListener('click', stopCounter);

    minusButtonElement.addEventListener('click', decreaseCounter);
    plusButtonElement.addEventListener('click', increaseCounter)
    heartButtonElement.addEventListener('click', heartButtonFunction)

    pauseButtonElement.textContent = 'pause';
}

// start the number counter on page load
startCounter();

// this adds the click functionality to the button and calls the stop counter
pauseButtonElement.addEventListener('click', stopCounter);


function stopCounter() {
    console.log('stopped')

    // clearInterval stops the interval that is set in motion in the prior function

    clearInterval(counterStart);
    pauseButtonElement.removeEventListener('click', stopCounter);
    pauseButtonElement.addEventListener('click', startCounter);

    minusButtonElement.removeEventListener('click', decreaseCounter);
    plusButtonElement.removeEventListener('click', increaseCounter);
    heartButtonElement.removeEventListener('click', heartButtonFunction)

    pauseButtonElement.textContent = 'resume';
}


heartButtonElement.addEventListener('click', heartButtonFunction)

function heartButtonFunction(){
    
    if(document.getElementById(currentCounterAmount)) {
        let foundElement = document.getElementById(currentCounterAmount).firstChild;
        let currentCounter = foundElement.innerText;
        currentCounter++ 
        foundElement.innerText = currentCounter
        
    } else {

    const likesList = document.querySelector('ul.likes');
    const counterLikeAmount = document.createElement('li');
    const newCounterTag = document.createElement('p');

    newCounterTag.textContent = 1;
    newCounterTag.style.display = 'inline-block';
    newCounterTag.style.margin = '0px';

    counterLikeAmount.textContent = ` likes for ${currentCounterAmount}`;
    counterLikeAmount.id = currentCounterAmount;

    // console.log(counterLikeAmount)
    // console.log(newCounterTag)
    counterLikeAmount.prepend(newCounterTag);
    
    likesList.appendChild(counterLikeAmount)};
}


commentFormElement.addEventListener('submit', (e) => {
    e.preventDefault();

    const commentArea = document.getElementById('list');
    const leaveNewComment = document.createElement('li');
    leaveNewComment.innerText = commentFormInput.value;

    commentArea.appendChild(leaveNewComment);

})


// TO FIX THE BUTTON (COUNTER START/STOP):

// I moved the counterStart declaration outside of the functions so that it can be accessed 
// and modified by both startCounter and stopCounter.

// I called startCounter() initially to start the counter when the script is loaded.

// In the startCounter function, I assign the result of setInterval to counterStart, 
// so that it can be cleared properly in the stopCounter function and restarted when 
// the "start" button is clicked again.