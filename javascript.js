// Use this as a guide: https://replit.com/@40percentzinc/ConnectFourConsole#script.js 



// Next step: Win, loss, tie 


// Step of storing the gameBoard (array) in gameBoard Object 
const gameBoardObject = {
  // Making a simple gameboard (2D Array): https://www.youtube.com/watch?v=SmJNeJuLmVo

 gameBoard: [["" ,"" ,"" ],
            [ "","" ,"" ],
            [ "","" ,"" ]],
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
    }

  }
}




(function gameOutcomes(){
  // If the gameboard looks a certain way, then player 1 wins. 
  if (gameBoardObject.gameboard == 

    [["X" ,"" ,"" ],
            [ "","" ,"" ],
            [ "","" ,"" ]]

  ){console.log("Player 1 wins!")}


})