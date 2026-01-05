// Use this as a guide: https://replit.com/@40percentzinc/ConnectFourConsole#script.js 



// Next step: Put the player1Value(X) in Gameboard.  
// Problem (Line 29): getting the following Error: Uncaught TypeError: Cannot read properties of undefined (reading '0')





let  Gameboard = {
     my2DArray: [],
     rows : 3, 
     columns : 3,

     //  created a 2D array: https://sentry.io/answers/how-can-i-create-a-two-dimensional-array-in-javascript/
  getArray: function(){
  for (let i = 0; i < this.rows; i++){
      this.my2DArray[i] = [];
      for (let j = 0; j < this.columns; j++){
          // element in row i, column j of my2DArray 
          this.my2DArray[i][j] = j;
      }
    }
    return this.my2DArray;
  },

  putAnX: function(rowsInput,columnsInput){
    this.my2DArray[rowsInput][columnsInput]="TEST";
}

  }


//  }













const player1 = {
    name: "player1Name",
    token: 1 ,
    player1Value: "X"
}

const player2 = {
    name: "player2Name", 
    token: 2,
    player2Value: "O"
}


// if the token is 1, then it is player1's turn. Put an X. 









// below code taken from: https://replit.com/@40percentzinc/ConnectFourConsole#script.js
// The GameController will be responsible for controlling the low and state of the game's turns, as well as whether anybody has won the game

// function GameController() {

//   const players = [
//     {
//       name: playerOneName,
//       token: 1
//     },
//     {
//       name: playerTwoName,
//       token: 2
//     }
//   ];

//   let activePlayer = players[0];

//   const switchPlayerTurn = () => {
//     activePlayer = activePlayer === players[0] ? players[1] : players[0];
//   };
//   const getActivePlayer = () => activePlayer;

//   const printNewRound = () => {
//     board.printBoard();
//     console.log(`${getActivePlayer().name}'s turn.`);
//   };

//   const playRound = (column) => {
//     // Drop a token for the current player
//     console.log(
//       `Dropping ${getActivePlayer().name}'s token into column ${column}...`
//     );
//     board.dropToken(column, getActivePlayer().token);

//     /*  This is where we would check for a winner and handle that logic,
//         such as a win message. */

//     // Switch player turn
//     switchPlayerTurn();
//     printNewRound();
//   };
// }
