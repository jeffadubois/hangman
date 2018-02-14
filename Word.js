var letter = require('./Letter.js');

function Word(wordstr) {
	this.word = wordstr;
	this.letters = [];

	this.initLetters = function() {
		for (var i=0; i < this.word.length; i++) {
			this.letters.push( new letter(this.word[i]));
		}
	};
    this.initLetters();
	this.getWord = function() {
		var result = "";
		for (var i=0; i < this.word.length; i++) {
			result = result + " " + this.letters[i];
		}
		return result;
	};

	this.guess = function(letter) {
		var result = false;
		for (var i = 0; i < this.letters.length; i++) {
             var found = this.letters[i].guess(letter);
			 if (found == true){
				 result = true;
			 }
		}
		return result;
	};
	
	this.entireWordIsGuessed = function(){
		var result = true;
		for (var i = 0; i < this.letters.length; i++) {
             if (this.letters[i].guessed == false){
				 result = false;
			 };
		}
		if (result == true){
			console.log("Congratulations!  You guessed the entire word!");
		}

        return result;		
	}
	
}

module.exports = Word;

