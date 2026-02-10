// Use this as a guide: https://replit.com/@40percentzinc/ConnectFourConsole#script.js 



// Next step: Time for the DOM! Update HTML document to include gameboard divs. 
 


// In the player1 and player2 objects: After putting a mark, it should check to see if anyone won. 

// Step of storing the gameBoard (array) in gameBoard Object 
const gameBoardObject = {
  // Making a simple gameboard (2D Array): https://www.youtube.com/watch?v=SmJNeJuLmVo

 gameBoard: [["" ,"" ,"" ],
            [ "","" ,"" ],
            [ "","" ,"" ]],

 outcomes: (function(){

  // Here are the ways that player 1 will win (8 ways): 
    if (
      // If the gameboard looks like this (Horizontal way 1: all Xs on top), Then P1 Wins. 
      (gameBoardObject.gameBoard[0][0] =="X" && 
        gameBoardObject.gameBoard[0][1]=="X" &&
        gameBoardObject.gameBoard[0][2]=="X") 
        // Or, if gameboard looks like this (Horizontal Way 2: All Xs in middle), then P1 Wins. 
        ||
       (gameBoardObject.gameBoard[1][0] =="X" && 
        gameBoardObject.gameBoard[1][1]=="X" &&
        gameBoardObject.gameBoard[1][2]=="X") 
        // Or, if gameboard looks like this (Horizontal Way 3: all Xs in bottom), Then P1 wins.
        ||
        (gameBoardObject.gameBoard[2][0] =="X" && 
        gameBoardObject.gameBoard[2][1]=="X" &&
        gameBoardObject.gameBoard[2][2]=="X")

        // Vertical ways (3 ways)for Player 1 to win:
        // vertical (left):
        ||
        (gameBoardObject.gameBoard[0][0] =="X" && 
        gameBoardObject.gameBoard[1][0]=="X" &&
        gameBoardObject.gameBoard[2][0]=="X")
        // vertical (middle):
        ||
        (gameBoardObject.gameBoard[0][1] =="X" && 
        gameBoardObject.gameBoard[1][1]=="X" &&
        gameBoardObject.gameBoard[2][1]=="X")
        // vertical (right):
        ||
        (gameBoardObject.gameBoard[0][2] =="X" && 
        gameBoardObject.gameBoard[1][2]=="X" &&
        gameBoardObject.gameBoard[2][2]=="X")


        // Diagonal (2 ways) for player 1 to win:
        // Diagonal Way 1:
        ||
        (gameBoardObject.gameBoard[0][0] =="X" && 
        gameBoardObject.gameBoard[1][1]=="X" &&
        gameBoardObject.gameBoard[2][2]=="X")  
        // Diagonal Way 2:
        ||
        (gameBoardObject.gameBoard[0][2] =="X" && 
        gameBoardObject.gameBoard[1][1]=="X" &&
        gameBoardObject.gameBoard[2][0]=="X")

      ){
        console.log("Player 1 wins!")
        // It should end the game, NOT next player's turn. 

        // turn both player 1 and player 2 turn to false. 
        player1.turn = false;
        player2.turn = false;
      }

      // Ways Player 2 will win (Copy and pasted from Player 1, replaced X with O) 

      else if (

        (gameBoardObject.gameBoard[0][0] =="O" && 
        gameBoardObject.gameBoard[0][1]=="O" &&
        gameBoardObject.gameBoard[0][2]=="O") 
        ||
       (gameBoardObject.gameBoard[1][0] =="O" && 
        gameBoardObject.gameBoard[1][1]=="O" &&
        gameBoardObject.gameBoard[1][2]=="O") 
        ||
        (gameBoardObject.gameBoard[2][0] =="O" && 
        gameBoardObject.gameBoard[2][1]=="O" &&
        gameBoardObject.gameBoard[2][2]=="O")

        ||
        (gameBoardObject.gameBoard[0][0] =="O" && 
        gameBoardObject.gameBoard[1][0]=="O" &&
        gameBoardObject.gameBoard[2][0]=="O")
        ||
        (gameBoardObject.gameBoard[0][1] =="O" && 
        gameBoardObject.gameBoard[1][1]=="O" &&
        gameBoardObject.gameBoard[2][1]=="O")
        ||
        (gameBoardObject.gameBoard[0][2] =="O" && 
        gameBoardObject.gameBoard[1][2]=="O" &&
        gameBoardObject.gameBoard[2][2]=="O")

        ||
        (gameBoardObject.gameBoard[0][0] =="O" && 
        gameBoardObject.gameBoard[1][1]=="O" &&
        gameBoardObject.gameBoard[2][2]=="O")  
        ||
        (gameBoardObject.gameBoard[0][2] =="O" && 
        gameBoardObject.gameBoard[1][1]=="O" &&
        gameBoardObject.gameBoard[2][0]=="O")
      ){
        console.log("Player 2 Wins!")
        // It should end the game, NOT next player's turn. 

        // turn both player 1 and player 2 turn to false. 
        player1.turn = false;
        player2.turn = false;
      }



// Everything else is a tie.  
// if the gameboard is full (gameboard is NOT empty) and P1 or P2 doesn't win, then it's a tie. 
    else if (
      ( gameBoardObject.gameBoard[0][0] != "" && gameBoardObject.gameBoard[0][1]!= "" && gameBoardObject.gameBoard[0][2] !=""
        && gameBoardObject.gameBoard[1][0] != "" && gameBoardObject.gameBoard[1][0] != "" && gameBoardObject.gameBoard[1][0] != ""
        && gameBoardObject.gameBoard[1][0] != "" && gameBoardObject.gameBoard[1][0] != "" && gameBoardObject.gameBoard[1][0] != ""
       )
    )
      {
      console.log("Tie!")
    }
  }
  ) ,

// Resetting the game (emptying the gameboard, setting to player 1's turn) 

gameboardReset: (function(){
  // Nested for loop 2D array reference: https://stackoverflow.com/questions/10021847/for-loop-in-multidimensional-javascript-array
  for (let i = 0; i < gameBoardObject.gameBoard.length ; i++){
    let boardPiece = gameBoardObject.gameBoard[i];
    for (let b = 0; b < boardPiece.length; b++){
      boardPiece[b] = "";
    }
  }
  // Set player 1 turn to true, player 2 to false.
  player1.turn = true;
  player2.turn = false;
})






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



