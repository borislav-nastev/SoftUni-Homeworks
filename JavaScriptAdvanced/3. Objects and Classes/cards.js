const cardsIife = (function () {

    let Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣',
    }

    class Card {

        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(cardFace) {
            let validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

            if (!validFaces.includes(cardFace)) {
                throw new Error('Invalid  card face');
            }

            this._face = cardFace;
        }

        get suit() {
            return this._suit;
        }

        set suit(cardSuit) {
            let validSuits = ['♠', '♥', '♦', '♣'];

            if (!validSuits.includes(cardSuit)) {
                throw new Error('Invalid  card suit');
            }

            this._suit = cardSuit;
        }
    }

    return {
        Suits: Suits,
        Card: Card
    }

}());

let result = cardsIife;
let Card = result.Card;
let Suits = result.Suits;

let card = new Card('Q', Suits.CLUBS);
console.log(card);
card.face = 'A';
card.suit = Suits.DIAMONDS;
console.log(card);
let card2 = new Card('1', Suits.HEARTS);