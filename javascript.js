

// You’re going to store the gameboard as an array 
// inside of a Gameboard object, so start there! Your players 
// are also going to be stored in objects, and you’re probably going 
// to want an object to control the flow of the game itself.

// Current Step: Step 3 (Winning rounds logic) 

// Step1 : Create gameboard object and put GameBoardArray into it. 

const gameBoardObject = {

    // Making a 2D array: https://www.geeksforgeeks.org/javascript/javascript-2d-array/
    // However, I just made 1 array.
 gameBoardArray: 
    ['', 'A', '',
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
    turnP1: true, 
    putAnX: function(arrayIndex){
        // Access the gamboardArray in the gameBoardObject through playerOne 
    //    console.log('this works: ' + gameBoardObject.gameBoardArray[1])
    // if the board is empty and it is player 1's turn, then put an X. Then, turn it onto P2's turn. 

       if (gameBoardObject.gameBoardArray[arrayIndex]=='' && this.turnP1==true){
            gameBoardObject.gameBoardArray[arrayIndex] = 'X'
            this.turnP1= false;
            playerTwo.turnP2= true;
            console.log(`Now it is player 2's turn!`);

       }
       else{
        console.log('Choose another one')
       }
    }
}


// This was a test to see if the boolean turnP2 worked. 
// function playerTwoTurn(){
//     if(playerTwo.turnP2==false){
//         console.log('Not player two turn yet')
//     }
//     else{
//         console.log('It is player two turn')
//     }
// }


// Did same thing as playerOne (access gameboardArray, and change the index from blank to O)
let playerTwo = {
    // Included the boolean turnP2 (this will determine whether player 2 should go or not)
    turnP2: false, 
    putAnO: function(arrayIndex){
        // If the gameboard is empty and it is player 2's turn, then put an O, turn P2's turn off, and turn P1's turn on. 
    if (gameBoardObject.gameBoardArray[arrayIndex]=='' && this.turnP2==true){
        gameBoardObject.gameBoardArray[arrayIndex] = 'O'
        this.turnP2=false;
        playerOne.turnP1=true;
       }
       else{
        console.log('Choose another one')
       }
    }
}

// Step 3: Winning Rounds Logic 

// If the gameboard looks like X, then print Y. 
// Question: How would we continuously check? 

let winAndTieOptions = {
    // If the gameboard array is XXX, then print player one won. 
    playerOneWon: function(){

    }

    

}
