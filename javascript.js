// current step: Show "Winner!" when there are 3 Xs in a row. First, create a resultObject (P1 win = true, p2 win = true, tie = true)


// You’re going to store the gameboard as an array inside of a Gameboard object, so start there! 
const gameBoardObject = {

    // Making a 2D array: https://www.geeksforgeeks.org/javascript/javascript-2d-array/

 gameBoardArray: 
    ['', 'X', '',
    '', '', '',
    '', '', ''],


};



//  Your players are also going to be stored in objects

// creating basic player objects: https://connect.wowlazy.com/#basic-player-object-example
const player1 = {
 name: "Player 1",
 player1turn: true 
};

const player2 ={
name: "Player 2",
player2turn: false 
};



// To put in gameflow: turns 

const gameFlow ={
putAnX: function(arrayIndex){

    // if the board is empty and it is player 1's turn, then put an X. Then, turn it onto P2's turn. 

       if (gameBoardObject.gameBoardArray[arrayIndex]=='' && player1.player1turn==true){
            gameBoardObject.gameBoardArray[arrayIndex] = 'X'
            player1.player1turn= false;
            player2.player2turn= true;
            console.log(`Now it is player 2's turn!`);

       }


    
}
,
putAnO: function(arrayIndex){
if (gameBoardObject.gameBoardArray[arrayIndex]=='' && player2.player2turn==true){
            gameBoardObject.gameBoardArray[arrayIndex] = 'O'
            player1.player1turn= true;
            player2.player2turn= false;
            console.log(`Now it is player 1's turn!`);

       }
}



}


const resultObject = {

    // If 3 X's in a row, then put "Player 1 wins!"

    p1Win: function(){
        if (gameBoardObject.gameBoardArray[0]=='X'){
            console.log("P1 Wins!");
        }
        else{
            console.log("No player yet!")
        }
    }
}


