function Letter(character){
	  this.char = character.toUpperCase();
	  this.guessed = false;
	  this.toString = function(){
		 var result = "_";
		 if (this.guessed){
			 result = this.char;
		 }
         return(result) 
	  }
	  this.guess = function(letter){
		  var result = false;
		  var searchChar = letter.toString().toUpperCase();
		  if (this.char == searchChar){
			   this.guessed = true;
			   result = true;
		  }
		  return result;
	  }
	
}

//export the constructor
module.exports = Letter;