

// You’re going to store the gameboard as an array 
// inside of a Gameboard object, so start there! Your players 
// are also going to be stored in objects, and you’re probably going 
// to want an object to control the flow of the game itself.

// Current Step: Step 3 (figuring out player turns)

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

function playerTwoTurn(){
    if(playerTwo.turnP2==false){
        console.log('Not player two turn yet')
    }
    else{
        console.log('It is player two turn')
    }
}

// Did same thing as playerOne (access gameboardArray, and change the index from blank to O)
let playerTwo = {
    turnP2: false, 
    putAnO: function(arrayIndex){
    if (gameBoardObject.gameBoardArray[arrayIndex]==''){
        gameBoardObject.gameBoardArray[arrayIndex] = 'O'
       }
       else{
        console.log('Choose another one')
       }
    }
}

// Step 3: Game Flow (who goes next? Maybe can use boolean variable; if player 1 goes, then flip booleanVar to false; when false, it's player 2's turn.)

const gameFlow = {
    // If it's player one's turn, then player two should not go. 
    // How to determine if player one went already? 
    // If turnP1 is true AND..., then put the...and then switch to player 2 turn. 

    // If it's player two's turn, then player one should not go. 



}
