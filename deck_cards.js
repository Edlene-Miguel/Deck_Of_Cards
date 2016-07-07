function DeckConstructor(){

	this.deck = [];

	this.makeDeck = function(){
		var ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
		var suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
		for(var i = 0; i < suits.length; i++){
			for(var j = 0; j < ranks.length; j++){
				var card = ranks[j] + ' of ' + suits[i];
				this.deck.push(card);
			}
		}
	}

	this.shuffleDeck = function(){
		k = "";
		temp = "";
		for (var i = 0; i < 100; i++){	
    		for (var j = 0; j < this.deck.length; j++) {
     			k = Math.floor(Math.random() * 52);
      			temp = this.deck[j];
      			this.deck[j] = this.deck[k];
      			this.deck[k] = temp;
			}
		}
	}

	this.resetDeck = function(){
		this.deck = [];
		this.makeDeck();
	}

	this.dealCard = function(){
		var n = '';
		var i = Math.floor(Math.random() * this.deck.length);
		n = this.deck[i];
		this.deck.splice(i, 1);
		return n;
	}
}

// var deck1 = new DeckConstructor();
// deck1.makeDeck();
// deck1.shuffleDeck();

function PlayerConstructor(name){
	this.name = name;
	this.hand = [];

	this.takeCard = function(n){
		this.hand.push(n);
	}

	this.discardCard = function(n){
		this.hand.splice(this.hand.indexOf(n),1);
		return n;
	}
}

// var edlene = new PlayerConstructor('Edlene');
// edlene.takeCard(deck1.dealCard());
// edlene.takeCard(deck1.dealCard());
// edlene.takeCard(deck1.dealCard());
// edlene.takeCard(deck1.dealCard());
// edlene.takeCard(deck1.dealCard());
// edlene.discardCard(deck1.dealCard());
// console.log(edlene.hand);








