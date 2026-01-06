// Use this as a guide: https://replit.com/@40percentzinc/ConnectFourConsole#script.js 



// Next step: Put the player1Value(X) in Gameboard.  
// Problem (Line 29): getting the following Error: Uncaught TypeError: Cannot read properties of undefined (reading '0')




// Making a simple gameboard (2D Array): https://www.youtube.com/watch?v=SmJNeJuLmVo
const gameBoard = [[1,2,3],
                   [4,5,6],
                   [7,8,9]]


// Attributes of player 1 object: Name, turn, and it can put an X on the board. 
const player1 = {
  name: "playerOne",
  turn: true,

  // replace the gameboard[row][column] with an X. 
  putAnX: function(row, column){
    gameBoard[row][column] = "X";
    
  }

}


// Attributes of player 2 object: Name, turn, and it can put an X on the board. 

const player2 = {
  name: "playerTwo",
  turn: false,
  putAnO: function (row, column){
    gameBoard[row][column] = "O";

  }
}






