// Use this as a guide: https://replit.com/@40percentzinc/ConnectFourConsole#script.js 



// Next step: Win, loss, tie 


// In the player1 and player2 objects: After putting a mark, it should check to see if anyone won. 

// Step of storing the gameBoard (array) in gameBoard Object 
const gameBoardObject = {
  // Making a simple gameboard (2D Array): https://www.youtube.com/watch?v=SmJNeJuLmVo

 gameBoard: [["" ,"" ,"" ],
            [ "","" ,"" ],
            [ "","" ,"" ]],

 outcomes: (function(){

  // Here are the ways that player 1 will win: 
    if (
      // If the gameboard looks like this, Then P1 Wins. 
      (gameBoardObject.gameBoard[0][0] =="X" && 
        gameBoardObject.gameBoard[0][1]=="X" &&
        gameBoardObject.gameBoard[0][2]=="X") 
        // Or, if gameboard looks like this, then P1 Wins. 
        ||
       (gameBoardObject.gameBoard[1][0] =="X" && 
        gameBoardObject.gameBoard[1][1]=="X" &&
        gameBoardObject.gameBoard[1][2]=="X") 

      ){
        console.log("Player 1 wins!")
        // It should end the game, NOT next player's turn. 
      }

    else{
      console.log("Game is still going!")
    }
  }
  )
  
  }
        



// players stored in player object 
// Attributes of player 1 object: Name, turn, and it can put an X on the board. 
const player1 = {
  name: "playerOne",
  turn: true,
  putAnX: function(row, column){
      // if the gameboard is empty, then put the X. 
      // Also, if it's player1's turn, then put the X. and make player2 turn true. 
    if (player1.turn == true && gameBoardObject.gameBoard[row][column]==""){
      gameBoardObject.gameBoard[row][column] = "X";
      player1.turn = false;
      player2.turn = true;
      console.log("Player 2's turn now!");
      // After putting the X, check to see if anyone won. 
      gameBoardObject.outcomes()

    }
  
  }

}

// Attributes of player 2 object: Name, turn, and it can put an O on the board. 
const player2 = {
  name: "playerTwo",
  turn: false,
  putAnO: function(row, column){

    // if the gameboard is empty, then put the O. 
    if (player2.turn == true && gameBoardObject.gameBoard[row][column]==""){
      gameBoardObject.gameBoard[row][column] = "O";
      player1.turn = true;
      player2.turn = false;
      console.log("Player 1's turn now!");
      // After putting O, check to see if anyone won. 
      gameBoardObject.outcomes()

    }

  }
}



