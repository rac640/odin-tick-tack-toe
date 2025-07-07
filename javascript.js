console.log("test")


// You’re going to store the gameboard as an array 
// inside of a Gameboard object, so start there! Your players 
// are also going to be stored in objects, and you’re probably going 
// to want an object to control the flow of the game itself.


// Create a gameboard object: 

function gameboard(){
    gameboardArray = []
}




// Factory function to create a player object, code used from: https://www.geeksforgeeks.org/javascript/what-are-factory-functions-in-javascript/# 

function createPlayer(name) {
    return {
        name: name,
        talk: function () {
            console.log('My name is '
                + name + ', the player.');
        }
    };
}

const player1 = createPlayer('Player1')