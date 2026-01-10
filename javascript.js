// Use this as a guide: https://replit.com/@40percentzinc/ConnectFourConsole#script.js 



// following step: Player Turns. Read this: https://codingnomads.com/js-201-connect-4-project-alternate-player-turns#what-information-do-you-need 



// Step of storing the gameBoard (array) in gameBoard Object 
const gameBoardObject = {
  // Making a simple gameboard (2D Array): https://www.youtube.com/watch?v=SmJNeJuLmVo

 gameBoard: [["" ,"" ,"" ],
            [ "","" ,"" ],
            [ "","" ,"" ]]
}



// players stored in player object 


// Attributes of player 1 object: Name, turn, and it can put an X on the board. 
const player1 = {
  name: "playerOne",
  turn: true,
  putAnX: function(row, column){
      // if the gameboard is empty, then put the X. 
      // Also, if it's player1's turn, then put the X. and make player2 turn true. 
    if (gameBoardObject.gameBoard[row][column]==""){
      gameBoardObject.gameBoard[row][column] = "X";
    }
  
  }

}

// Attributes of player 2 object: Name, turn, and it can put an O on the board. 
const player2 = {
  name: "playerTwo",
  turn: false,
  putAnO: function(row, column){

    // if the gameboard is empty, then put the O. 
    if (gameBoardObject.gameBoard[row][column]==""){
      gameBoardObject.gameBoard[row][column] = "O";
    }

  }
}


