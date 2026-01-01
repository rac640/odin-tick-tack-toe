// Use this as a guide: https://replit.com/@40percentzinc/ConnectFourConsole#script.js 





//  created a 2D array: https://sentry.io/answers/how-can-i-create-a-two-dimensional-array-in-javascript/
function Gameboard() {
  const my2DArray = [];
  const rows = 3;
  const columns = 3;

  for (let i = 0; i < rows; i++){
    my2DArray[i] = [];
    for (let j = 0; j < columns; j++){
        // element in row i, column j of my2DArray 
        my2DArray[i][j] = j;
    }
  }

  console.log(my2DArray);
}


