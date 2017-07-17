// var cards = ["queen", "queen","king", "king"];
// the following code is updated version of the array named cards
var cards = [
  {
    rank: 'queen',
    suit: 'hearts',
    cardImage: 'images/queen-of-hearts.png'
  },
  {
    rank: 'queen',
    suit: 'diamonds',
    cardImage: 'images/queen-of-diamonds.png'
  },
  {
    rank: 'king',
    suit: 'hearts',
    cardImage: 'images/king-of-hearts.png'
  },
  {
    rank: 'king',
    suit: 'diamonds',
    cardImage: 'images/king-of-diamonds.png'
  }
];
var cardsInPlay = [];
// this function is for chcking card matches.
var checkForMatch = function(){
  // this stateent is checking whether the user has played two cards and the number is .
  if (cardsInPlay.length === 2){
    if (cardsInPlay[0].rank === cardsInPlay[1].rank ){

       alert("You found a match!");

      console.log("You have found a match!");
    }else if (cardsInPlay[2].rank === cardsInPlay[3].rank){
      //to console log, if yoou choose to do it over alert, turn the following line on:
      // console.log("Sorry, Try again");
       alert("You found a match!");
       console.log("You have a match too.");


    }else {
      alert("Sorry, Try again");
      console.log("you clicked one king and queen.");


    }
  }
}

var flipCard = function(){
  var cardId = this.getAttribute('data-id');
  this.setAttribute('src',cards[cardId].cardImage);
  console.log("User flipped " + cards[cardId].rank);
   cardsInPlay.push(cards[cardId]);
   console.log("The card image is: " + cards[cardId].cardImage);
   console.log("The card suit is: " + cards[cardId].suit);


   checkForMatch();
  // var cardOne = cards[0];
  // var cardTwo = cards[1];
  // cardsInPlay.push(cardOne);
  // cardsInPlay.push(cardTwo);

  // console.log("User flipped queen");
  // console.log("User flipped king");

};

// flipCard(2);
// flipCard(1);

var createBoard = function(){
  for (var i = 0; i < cards.length; i++){
    var cardElement = document.createElement('img');
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    document.querySelector("#game-board").appendChild(cardElement);

  }
};
createBoard();

