var inquirer = require('inquirer');
var Word = require('./Word.js');

var guessible_words = ["SANDWHICHES", "STOCKINGS", "TROMBONE", "CLOTHING", "MONOPOLY"];

var maxNumGuesses = 10;
var currNumGuesses = 0;
var currentWord;

function getNextGuessibleWord(){
	var theWord =  guessible_words[Math.floor(Math.random() * guessible_words.length)].toUpperCase();
	return theWord;
}

function promptForLetter(){
  inquirer
    .prompt({
      name: "charc",
      type: "input",
      message: "Guess a letter.",
    })
    .then(function(answer) {
		  var upCharc = answer.charc.toUpperCase();
          var found = currentWord.guess(answer.charc);
		  console.log(currentWord.getWord() + "\n");
		  if (found == false){
		      currNumGuesses++;
		  }
		  var numLeft = maxNumGuesses - currNumGuesses;
	  
		  if (currNumGuesses == maxNumGuesses){
			  console.log("You have " + numLeft + " guesses remaining.\n");	
			  console.log("You lose. Try again.\n");
			  play();
		  }
		  else if (currentWord.entireWordIsGuessed() == false){
			  console.log("You have " + numLeft + " guesses remaining.\n");	
			  promptForLetter();
		  }
		  else {
                play();
		       }
	  }
	);	
}

function play(){
  
 var  stringToGuess = getNextGuessibleWord();
 console.log("\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n")
 console.log("New Game!\nNext word to 'guess' is " + stringToGuess + "\n");
 currentWord = new Word(stringToGuess);
 currNumGuesses = 0;
 promptForLetter();
}//play

play();

