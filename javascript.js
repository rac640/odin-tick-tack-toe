// Use this as a guide: https://replit.com/@40percentzinc/ConnectFourConsole#script.js 

// Next step: Have P1 make background red of a node


// Step of storing the gameBoard (array) in gameBoard Object 
const gameBoardObject = {
  // Making a simple gameboard (2D Array): https://www.youtube.com/watch?v=SmJNeJuLmVo

// select all the divs. This is the new gameboard. 
gameBoard: document.querySelectorAll(".putXorOHere") ,


 outcomes: (function(){

  // Here are the ways that player 1 will win (8 ways): 
    if (
      // If the gameboard looks like this (Horizontal way 1: all Xs on top), Then P1 Wins. 
      (gameBoardObject.gameBoard[0].style.background =="red" && 
        gameBoardObject.gameBoard[1].style.background =="red" &&
        gameBoardObject.gameBoard[2].style.background =="red") 
        // Or, if gameboard looks like this (Horizontal Way 2: All Xs in middle), then P1 Wins. 
        ||
       (gameBoardObject.gameBoard[3].style.background =="red" && 
        gameBoardObject.gameBoard[4].style.background =="red" &&
        gameBoardObject.gameBoard[5].style.background =="red") 
        // Or, if gameboard looks like this (Horizontal Way 3: all Xs in bottom), Then P1 wins.
        ||
        (gameBoardObject.gameBoard[6].style.background =="red"&& 
        gameBoardObject.gameBoard[7].style.background =="red"&&
        gameBoardObject.gameBoard[8].style.background =="red")

        // Vertical ways (3 ways)for Player 1 to win:
        // vertical (left):
        ||
        (gameBoardObject.gameBoard[0].style.background =="red" && 
        gameBoardObject.gameBoard[3].style.background =="red" &&
        gameBoardObject.gameBoard[6].style.background =="red")
        // vertical (middle):
        ||
        (gameBoardObject.gameBoard[1].style.background =="red"  && 
        gameBoardObject.gameBoard[4].style.background =="red" &&
        gameBoardObject.gameBoard[7].style.background =="red")
        // vertical (right):
        ||
        (gameBoardObject.gameBoard[2].style.background =="red" && 
        gameBoardObject.gameBoard[5].style.background =="red" &&
        gameBoardObject.gameBoard[8].style.background =="red")


        // Diagonal (2 ways) for player 1 to win:
        // Diagonal Way 1:
        ||
        (gameBoardObject.gameBoard[0].style.background =="red" && 
        gameBoardObject.gameBoard[4].style.background =="red" &&
        gameBoardObject.gameBoard[8].style.background =="red")  
        // Diagonal Way 2:
        ||
        (gameBoardObject.gameBoard[2].style.background =="red" && 
        gameBoardObject.gameBoard[4].style.background =="red" &&
        gameBoardObject.gameBoard[6].style.background =="red")

      ){
        console.log("Player 1 wins!")
        // It should end the game, NOT next player's turn. 

        // turn both player 1 and player 2 turn to false. 
        player1.turn = false;
        player2.turn = false;
      }

      // Ways Player 2 will win (Copy and pasted from Player 1, replaced X with O) 

      else if (

        (gameBoardObject.gameBoard[0].style.background =="blue" && 
        gameBoardObject.gameBoard[1].style.background =="blue" &&
        gameBoardObject.gameBoard[2].style.background =="blue") 
        ||
       (gameBoardObject.gameBoard[3].style.background =="blue" && 
        gameBoardObject.gameBoard[4].style.background =="blue" &&
        gameBoardObject.gameBoard[5].style.background =="blue") 
        ||
        (gameBoardObject.gameBoard[6].style.background =="blue"&& 
        gameBoardObject.gameBoard[7].style.background =="blue"&&
        gameBoardObject.gameBoard[8].style.background =="blue")

        ||
        (gameBoardObject.gameBoard[0].style.background =="blue" && 
        gameBoardObject.gameBoard[3].style.background =="blue" &&
        gameBoardObject.gameBoard[6].style.background =="blue")
        ||
        (gameBoardObject.gameBoard[1].style.background =="blue"  && 
        gameBoardObject.gameBoard[4].style.background =="blue" &&
        gameBoardObject.gameBoard[7].style.background =="blue")
        ||
        (gameBoardObject.gameBoard[2].style.background =="blue" && 
        gameBoardObject.gameBoard[5].style.background =="blue" &&
        gameBoardObject.gameBoard[8].style.background =="blue")

        ||
        (gameBoardObject.gameBoard[0].style.background =="blue" && 
        gameBoardObject.gameBoard[4].style.background =="blue" &&
        gameBoardObject.gameBoard[8].style.background =="blue")  
        ||
        (gameBoardObject.gameBoard[2].style.background =="blue" && 
        gameBoardObject.gameBoard[4].style.background =="blue" &&
        gameBoardObject.gameBoard[6].style.background =="blue")
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
  putAnX: function(boxNum){
      // if the gameboard is empty, then put the X. 
      // Also, if it's player1's turn, then put the X. and make player2 turn true. 
    if (player1.turn == true && gameBoardObject.gameBoard[boxNum].style.background !=="red"){
      // The box that was clicked should turn red. 
      gameBoardObject.gameBoard[boxNum].style.background="red"
      // gameBoardObject.gameBoard[row][column] = "X";
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



