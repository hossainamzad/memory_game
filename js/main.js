var cards = ["queen", "queen","king", "king"];
var cardsInPlay = [];
// this function is for chcking card matches.
var checkForMatch = function(){
  if (cardsInPlay.length === 2){
    if (cardsInPlay[0] === cardsInPlay[1] ){
      console.log("You have found a match!");
    }else{
      console.log("Sorry, Try again");
    }
  }
}
var flipCard = function(cardId){
  console.log("User flipped " + cards[cardId]);
   cardsInPlay.push(cards[cardId]);

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

