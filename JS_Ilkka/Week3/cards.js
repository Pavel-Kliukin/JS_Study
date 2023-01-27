'use strict';
const SPADES=0;
const CLUBS=1;
const HEARTS=2;
const DIAMONDS=3;

function createCard(suite, rank){
                        //  0         1        2        3
    const suiteSymboles=['\u2660','\u2663','\u2665','\u2666'];

    return `${suiteSymboles[suite]} ${rank}`;
    
}

console.log(createCard(HEARTS, 10));

// Creating the deck
const deck=[];

for(let rank=1; rank<14; rank++){
    deck.push(createCard(SPADES, rank));
    deck.push(createCard(CLUBS, rank));
    deck.push(createCard(HEARTS, rank));
    deck.push(createCard(DIAMONDS, rank));
}

console.log(deck)

// Shuffling the deck
for(let i=0; i<deck.length; i++){
    const indA = Math.floor(Math.random()*deck.length);
    const indB = Math.floor(Math.random()*deck.length);
    [deck[indA], deck[indB]] = [deck[indB], deck[indA]];
}

console.log(deck);

// Taking two cards from the deck
const janeCard = deck.pop()
console.log('Jane takes', janeCard);
const mikeCard = deck.pop()
console.log('Mike takes', mikeCard);

//Separating the rank and the symbol of card

const jPart=janeCard.split(' ');
console.log(jPart);
const jRank= +jPart[1];
//console.log(jRank);

const mPart=mikeCard.split(' ');
console.log(mPart);
const mRank= +mPart[1];
//console.log(mRank);

if(jRank>mRank){
    console.log('Jane wins');
}
else if(mRank>jRank){
    console.log('Mike wins');
}
else{
    console.log('It\'s a tie');
}
