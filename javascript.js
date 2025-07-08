console.log("test")


// You’re going to store the gameboard as an array 
// inside of a Gameboard object, so start there! Your players 
// are also going to be stored in objects, and you’re probably going 
// to want an object to control the flow of the game itself.

// Step: Create gameboard object and put GameBoardArray into it. 




const gameBoardObject = {

    // Making a 2D array: https://www.geeksforgeeks.org/javascript/javascript-2d-array/
 gameBoardArray: [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
]

};



// Step: Create Objectthat controls flow of game. 
// What is flow of game? It is

function gameFlow(name) {
    return {
        name: name,
        talk: function () {
            console.log('My name is '
                + name + ', the robot.');
        }
    };
}

//Create a robot with name Chitti
const robo1 = gameFlow('Chitti');
