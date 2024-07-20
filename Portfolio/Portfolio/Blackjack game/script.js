
let player = {
   name : "User : ",
   chips : "You cannot earn money right now"
}
let hasblackjack = false
let isAlive = false
let message = ""
let messageEl = document.querySelector("#message-el")

let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector(".cards-el")

let playerEl = document.getElementById("player")
playerEl.textContent = (player.name + "$" + player.chips)
function getRandomCard(){
    let randomCard = Math.floor(Math.random()*13) + 1
    if (randomCard === 1 )
    {
        return 11;
    }
    else if (randomCard > 10 )
  {  return 10
  }
  else {
    return randomCard;
  }
}

function start(){
   if (!isAlive) {
isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
   cards = [firstCard , secondCard];
  sum = firstCard + secondCard ;
    renderGame();

}
}
function renderGame()
{
    cardsEl.textContent = ("Cards" + " " + ":" )
for  ( i= 0; i < cards. length; i ++ )
{
    cardsEl.textContent += cards[i] + " "
}
    sumEl.textContent = ("Sum: " + sum)
   
if (sum <=20 )
{
    message = ("Do you want to draw a new card?")
    isAlive = true;
}
else if (sum === 21) 
{
    message = ( "You have got a Blackjack")
    hasblackjack = true
}
else {
    message = ("You have lost the game!")
    isAlive = false
}
messageEl.textContent = message
}
function newCard() {
   if (isAlive === true && hasblackjack=== false ) {
  let card = getRandomCard()
  sum += card
  cards.push(card)
  renderGame();
   }
}
