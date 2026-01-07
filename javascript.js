// Use this as a guide: https://replit.com/@40percentzinc/ConnectFourConsole#script.js 


// Next step: Player Turns. Read this: https://codingnomads.com/js-201-connect-4-project-alternate-player-turns#what-information-do-you-need 



// Step of storing the gameBoard (array) in gameBoard Object 
const gameBoardObject = {
  // Making a simple gameboard (2D Array): https://www.youtube.com/watch?v=SmJNeJuLmVo

 gameBoard: [[1,2,3],
            [4,5,6],
            [7,8,9]]
}



// players stored in player object 


// Attributes of player 1 object: Name, turn, and it can put an X on the board. 
const player1 = {
  name: "playerOne",
  turn: true,
  putAnX: function(row, column){
    gameBoardObject.gameBoard[row][column] = "X";
  }

}

// Attributes of player 2 object: Name, turn, and it can put an O on the board. 
const player2 = {
  name: "playerTwo",
  turn: false,
  putAnO: function(row, column){
    // Gameboard.getArray() is an object type. 
    gameBoardObject.gameBoard[row][column] = "O";

  }
}



