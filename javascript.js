// current step: Show "Winner!" when there are 3 Xs in a row. First, create a resultObject (P1 win = true, p2 win = true, tie = true)


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
    // If the gameboard looks a certain way, then it should print 'tie!'
    // if gameboardarray[0,1,2,...8] look like [O,X,X,....], then it should print 'tie!'
    // Need to find a way to group the array indexes together; instead of writing gameboardobject.gameboardarray[0], gameboardobject.gameboardarray[2], etc.
    // Idea: for loop? 

    tieResult: (function(){
    })
}




// Testing out to see if object value  equals array. It doesn't, because the type (object vs array)
// Possible solution: use For Loop and put the object values into an array. Then, compare this array to how a tied result should look. 


newGameBoardArray = [];

// Put these values in the newGameBoardArray. 
for (let x = 0; x < gameBoardObject.gameBoardArray.length ; x++){
    // console.log("For Looped:" + gameBoardObject.gameBoardArray[x])
    newGameBoardArray.push(gameBoardObject.gameBoardArray[x])    
}


console.log("new game board: ", newGameBoardArray);




// Next, put: if newGameBoardArray looks like [X,O,X,...] or newGameBoardArray looks like [X,X,O,...], then call it a tie.

if (newGameBoardArray== ['', 'X', '',
    '', 'X', '',
    '', 'X', '']){
        console.log("It works!")
    }
else{console.log("I don't work!")}


console.log(typeof(newGameBoardArray))

console.log(typeof(['', 'X', '','', 'X', '','', 'X', '']))


resultObject.p1Win();