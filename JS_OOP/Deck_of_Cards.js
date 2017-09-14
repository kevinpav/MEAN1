// Deck of Cards

// Deck object
class Deck {
    constructor(){
        this.cards = [];
        // reset(this.cards);
        // shuffle(this.cards);
    }

    // From: https://bost.ocks.org/mike/shuffle/
    shuffle() {
        var m = this.cards.length, t, i;
        console.log("shuffling..");
        // While there remain elements to shuffle…
        while (m) {
      
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);
      
          // And swap it with the current element.
          t = this.cards[m];
          this.cards[m] = this.cards[i];
          this.cards[i] = t;
        }
        console.log("done.");
        return;
    }
    // Deal a card, take from "top" of deck
    dealCard(){
        // Deal a random card. Since the deck is already shuffled, will POP from array
        if (this.cards.length < 1){
            console.log("ERROR: No cards left in deck!");
            return;
        }
        return(this.cards.pop());
    }
    // Reset deck. Cards will be in order
    reset(){
        console.log("Resetting cards..");
        for (let i=1; i < 53; i++){
            this.cards.push(i);
        }
        console.log("done.");
        return;
    }
    // Print the deck of cards
    printDeck(){
        console.log("Printing deck..");
        for (let i=0; i < this.cards.length; i++){
            console.log(`${i+1}:${this.cards[i]}`);
        }
    }
}

// Deck object
class Player {
    constructor(name){
        this.name = name;
        this.hand = [];
    }
    // Take a card from the deck
    takeCard(deck){
        this.hand.push(deck.dealCard());
    }
    // Drop a card. Parm is array element.
    dropCard(card){
        if (card > this.hand.length-1){
            console.log("ERROR: Card is not in Deck array!");
        } else {
            this.hand.splice(card, 1);
        }
        return;
    }
    // Print the player's hand
    printHand(){
        console.log(`Printing ${this.name}'s hand..`);
        for (let i=0; i < this.hand.length; i++){
            console.log(`${i+1}:${this.hand[i]}`);
        }
    }
}

// Tests
let myDeck = new Deck();
myDeck.reset();
myDeck.shuffle();
// myCard = myDeck.dealCard();
// console.log(myCard);
// myDeck.printDeck();

const playerOne = new Player("Joe");
const playerTwo = new Player("Ralph");

// Deal 5 cards
for (let i=0; i<5; i++){
    playerOne.takeCard(myDeck);
    playerTwo.takeCard(myDeck);
}    
playerOne.printHand();
playerTwo.printHand();