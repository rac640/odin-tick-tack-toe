// current step: Tie result (line 126)

// You’re going to store the gameboard as an array inside of a Gameboard object, so start there! 
const gameBoardObject = {

    // Making a 2D array: https://www.geeksforgeeks.org/javascript/javascript-2d-array/

 gameBoardArray: 
    ['', 'X', '',
    '', 'X', '',
    '', 'X', ''],


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

// When to end game and restart 

const gameFlow ={
putAnX: function(arrayIndex){

    // if the board is empty and it is player 1's turn, then put an X. Then, turn it onto P2's turn. 

       if (gameBoardObject.gameBoardArray[arrayIndex]=='' && player1.player1turn==true){
            gameBoardObject.gameBoardArray[arrayIndex] = 'X'
            player1.player1turn= false;
            player2.player2turn= true;
            console.log(`Now it is player 2's turn!`);

       }
       else{
        console.log("Invalid!")
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

else{
    console.log("Invalid!")}
       
}



}


const resultObject = {

    // If 3 X's in a row, then put "Player 1 wins!"

    p1Win: (function(){
        // Here are the combinations for P1 to win. 
        if (
               (gameBoardObject.gameBoardArray[0]=='X' && gameBoardObject.gameBoardArray[1]=='X' && gameBoardObject.gameBoardArray[2]=='X')
            || (gameBoardObject.gameBoardArray[0]=='X' && gameBoardObject.gameBoardArray[3]=='X' && gameBoardObject.gameBoardArray[6]=='X')
            || (gameBoardObject.gameBoardArray[1]=='X' && gameBoardObject.gameBoardArray[4]=='X' && gameBoardObject.gameBoardArray[7]=='X')
            || (gameBoardObject.gameBoardArray[2]=='X' && gameBoardObject.gameBoardArray[5]=='X' && gameBoardObject.gameBoardArray[8]=='X')
            || (gameBoardObject.gameBoardArray[3]=='X' && gameBoardObject.gameBoardArray[4]=='X' && gameBoardObject.gameBoardArray[5]=='X')
            || (gameBoardObject.gameBoardArray[4]=='X' && gameBoardObject.gameBoardArray[2]=='X' && gameBoardObject.gameBoardArray[6]=='X')
            || (gameBoardObject.gameBoardArray[6]=='X' && gameBoardObject.gameBoardArray[7]=='X' && gameBoardObject.gameBoardArray[8]=='X')
            || (gameBoardObject.gameBoardArray[8]=='X' && gameBoardObject.gameBoardArray[4]=='X' && gameBoardObject.gameBoardArray[0]=='X')
        ){
            console.log("P1 Wins!");
        }
        else{
            console.log("No player yet!")
        }
    }),

    p2Win:(function(){

         if (
               (gameBoardObject.gameBoardArray[0]=='O' && gameBoardObject.gameBoardArray[1]=='O' && gameBoardObject.gameBoardArray[2]=='O')
            || (gameBoardObject.gameBoardArray[0]=='O' && gameBoardObject.gameBoardArray[3]=='O' && gameBoardObject.gameBoardArray[6]=='O')
            || (gameBoardObject.gameBoardArray[1]=='O' && gameBoardObject.gameBoardArray[4]=='O' && gameBoardObject.gameBoardArray[7]=='O')
            || (gameBoardObject.gameBoardArray[2]=='O' && gameBoardObject.gameBoardArray[5]=='O' && gameBoardObject.gameBoardArray[8]=='O')
            || (gameBoardObject.gameBoardArray[3]=='O' && gameBoardObject.gameBoardArray[4]=='O' && gameBoardObject.gameBoardArray[5]=='O')
            || (gameBoardObject.gameBoardArray[4]=='O' && gameBoardObject.gameBoardArray[2]=='O' && gameBoardObject.gameBoardArray[6]=='O')
            || (gameBoardObject.gameBoardArray[6]=='O' && gameBoardObject.gameBoardArray[7]=='O' && gameBoardObject.gameBoardArray[8]=='O')
            || (gameBoardObject.gameBoardArray[8]=='O' && gameBoardObject.gameBoardArray[4]=='O' && gameBoardObject.gameBoardArray[0]=='O')
        ){
            console.log("P2 Wins!");
        }
        else{
            console.log("No player yet!")
        }


    }),

    // All ties in tic-tac-toe: https://codegolf.stackexchange.com/questions/249941/all-possible-ties-in-tic-tac-toe 
    // If the gameBoardArray is P1 or P2 does not win, then it should say "Tie!"

    tieResult: (function(){
    })
}


