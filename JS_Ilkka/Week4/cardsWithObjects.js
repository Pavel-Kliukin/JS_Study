'use strict';

const SPADES={
    suiteName:'spades',
    suiteSymbol:'\u2660',
    color:'black'
};

const CLUBS={
    suiteName:'clubs',
    suiteSymbol:'\u2663',
    color:'black'
};

const HEARTS={
    suiteName:'hearts',
    suiteSymbol:'\u2665',
    color:'red'
};

const DIAMONDS={
    suiteName:'diamonds',
    suiteSymbol:'\u2666',
    color:'red'
};

function createCard(suite, rank){
    let rankSymbol;
    switch (rank){
        case 13: rankSymbol='K'; break;
        case 12: rankSymbol='Q'; break;
        case 11: rankSymbol='J'; break;
        case 1: rankSymbol='A'; break;
        default:
            rankSymbol=`${rank}`
    }

    return {
        suite:suite,
        rank:rank,
        rankSymbol:rankSymbol
    }
    /* The same
    return {
        suite,
        rank,
        rankSymbol
    }
    */
}

const KingOfSpades=createCard(SPADES,13)
console.log(KingOfSpades.suite.suiteSymbol)

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
const janeCard = deck.pop();
const mikeCard = deck.pop();

console.log(`Jane takes, ${janeCard.suite.suiteSymbol} ${janeCard.rankSymbol}`);
console.log(`Mike takes, ${mikeCard.suite.suiteSymbol} ${mikeCard.rankSymbol}`);

// Cards comparison
if (janeCard.rank > mikeCard.rank){
    console.log('Jane wins');
}
else if (mikeCard.rank > janeCard.rank){
    console.log('Mike wins');
}
else {
    console.log('It\'s a tie');
}
