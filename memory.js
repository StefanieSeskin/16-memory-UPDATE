//once again, I can't do this.  I was hoping to JUST accomplish toggling
// back and forth between the "front" (blank), and the "back", (div with random number).
// can't find any code and thomas' lecture didn't help.  My brain cannot
// conceptualize how to make anything apply to this assignment.    I don't 
// want to spin my wheels any more.  I am going in circles.

let arr = [1, 1, 2, 2, 5, 5, 7, 7, 12, 12, 80, 80, 50, 50, 100, 100, 77, 77]
let arr2 = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']

shuffle(arr)


let cardSelection = arr.map(function(item){
    return `<div class="card">${item}</div>`

}).join('')

let cardSelection2 = arr2.map(function(item2){
  return `<div class="cardFront">${item2}</div>`

}).join('')
// console.log(cardSelection2)



document.querySelector("#gameBoxes").innerHTML = cardSelection
document.querySelector("#gameBoxesFront").innerHTML = cardSelection2
// Function to random shuffle array/cards

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
    
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

// Toggle visibility ORIGINAL
var cardFront= document.querySelector('#gameBoxesFront');
var hiddenNumber = document.querySelector('#gameBoxes');
cardFront.addEventListener('click', function (event) {
      if (hiddenNumber.style.display == "") {
        hiddenNumber.style.display = "none";
          cardFront.innerHTML = `<div class="card">${item}</div>`;
      } else  {
        hiddenNumber.style.display = "";
          cardFront.innerHTML = `<div class="cardFront">${item2}</div>`;

        }
      }
         
    );
  

// button = cardFront
// menu = hiddenNumber



// Click card eventlistener? __FROM BUTTON VIDEO

// let cardFront = document.querySelector("#gameBoxesFront")
// cardFront.addEventListener('click', function(e){
//   return `<div class="#gameBoxes">${item2}</div>`
// }).join('')
// 
// --hide
// --show arr2
//cardFront.? = 


// let cardBack = document.querySelector("#gameBoxes")
// cardBack.addEventListener('click', function(e))
// --hide
// --show arr

//function compareCard() {
// let cardClicked = [currentIndex]

// }

// const cards = document.querySelectorAll('#gameBoxes');

// function flipCard() {
//   this.classList.toggle('flip');
// }

// document.getElementById("gameBoxes").addEventListener("click", );


// THOMAS HANGMAN CODE BELOW 

// makeButtons()
// // check if user won
// function checkIfGuessed(card, guesses) {
//   let hasWon = true
//   for (let character of word) {
//     if (guesses.includes(character)) {

//     } else {
//       hasWon = false
//     }
//   }
//   return hasWon
// }
// // display message to user
// function messageToUser(str) {
//   messageContainer.innerHTML = str
// }
// // handle button click
// function handleUserGuess(e) {
//   if (state.lives === 0) {
//     messageToUser('you lose')
//     return
//   }
//   const currButton = e.target
//   const letter = currButton.innerHTML
//   const letterIsInWord = state.randomWord.includes(letter)
//   const guessWasntMade = state.guesses.includes(letter)
//   if (guessWasntMade == false) {
//     state.guesses.push(letter)
//   } else {
//     // messageToUser('already guessed...')
//     return
//   }
//   if (letterIsInWord) {
//     /// redraw dashes
//     makeDashes(state.randomWord, state.guesses)
//   } else {
//     state.lives--
//   }
//   const hasWon = checkIfWon(state.randomWord, state.guesses)
//   if (hasWon) {
//     messageToUser('you win')
//     return
//   }
// }


// Stefanie's copy and paste below
// btnContainer.addEventListener('click', handleUserGuess)

// const cards = document.querySelectorAll('#gameBoxes');

// function flipCard() {
//   this.classList.toggle('flip');
// }

// cards.forEach(card => card.addEventListener('click', flipCard));

// console.log(shuffle(arr))

