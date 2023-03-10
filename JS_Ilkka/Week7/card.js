'use strict';
const SUITES = ['\u2660', '\u2663', '\u2665', '\u2666']
const SYMBS = [, 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

class Card{
    constructor(rank,suiteNro){
        this.rankSymbol = SYMBS[rank];
        this.suiteSymbol=SUITES[suiteNro];
    }

    toString(){
        return `${this.rankSymbol} ${this.suiteSymbol}`;
    }
}

const cardA=new Card(12,1);
console.log(cardA);
console.log(''+cardA);
console.log(cardA.toString());
console.log('my card is '+cardA);
console.log(`${cardA}`);
console.log(cardA.rankSymbol);
console.log(cardA.suiteSymbol);