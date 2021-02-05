let arr = [1, 1, 2, 2, 5, 5, 7, 7, 12, 12, 80, 80, 50, 50, 100, 100, 77, 77]

console.log(shuffle(arr))


let cardSelection = arr.map(function(item){
    return `<div class="card">${item}</div>`

}).join('')
console.log(cardSelection)

document.querySelector("#gameBoxes").innerHTML = cardSelection

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

const cards = document.querySelectorAll('#gameBoxes');

function flipCard() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));

// console.log(shuffle(arr))

