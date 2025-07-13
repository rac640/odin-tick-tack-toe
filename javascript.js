

// You’re going to store the gameboard as an array 
// inside of a Gameboard object, so start there! Your players 
// are also going to be stored in objects, and you’re probably going 
// to want an object to control the flow of the game itself.

// Current Step: Step 3 

// Step1 : Create gameboard object and put GameBoardArray into it. 

const gameBoardObject = {

    // Making a 2D array: https://www.geeksforgeeks.org/javascript/javascript-2d-array/
    // However, I just made 1 array.
 gameBoardArray: 
    ['x', '', '',
    '', '', '',
    '', '', ''],

    // Step 1.5 Creating a method for the gamBoard: Return the gameBoardArray (test: is gameBoardArray an array type?)
test: function(){
    return this.gameBoardArray;
},

};



// Step 2: Player Objects 
// Player one has the ability to put an X. 
let playerOne ={    
    putAnX: function(arrayIndex){
        
    }
}

// Step 3: Game Flow (who goes next? Maybe can use boolean variable; if player 1 goes, then flip booleanVar to false; when false, it's player 2's turn.)