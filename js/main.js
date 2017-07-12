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
    if (cardsInPlay[0] === cardsInPlay[1] ){
      console.log("You have found a match!");
    }else{
      alert("Sorry, Try again");
      //to console log, if yoou choose to do it over alert, turn the following line on:
      // console.log("Sorry, Try again");

    }
  }
}
var flipCard = function(cardId){
  console.log("User flipped " + cards[cardId].rank);
   cardsInPlay.push(cards[cardId].rank);
   console.log("The card image is: " + cards[cardId].cardImage);
   console.log("The card suit is: " + cards[cardId].suit);


   checkForMatch();

  // var cardOne = cards[0];
  // var cardTwo = cards[1];
  // cardsInPlay.push(cardOne);
  // cardsInPlay.push(cardTwo);

  // console.log("User flipped queen");
  // console.log("User flipped king");

}
flipCard(2);
flipCard(1);



