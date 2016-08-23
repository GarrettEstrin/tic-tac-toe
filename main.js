// Custom JavaScript by Garrett Estrin | GarrettEstrin.com

// Variable for turn
var turn = true;

// Empty arrays for selections
var xSquares = [];
var oSquares = [];

// Empty arrays to track if player won
var xWin = [];
var oWin = [];

// Setting squares to variables
var s1 = document.getElementById('square1');
var s2 = document.getElementById('square2');
var s3 = document.getElementById('square3');
var s4 = document.getElementById('square4');
var s5 = document.getElementById('square5');
var s6 = document.getElementById('square6');
var s7 = document.getElementById('square7');
var s8 = document.getElementById('square8');
var s9 = document.getElementById('square9');
// Function to decide who's turn it is and change square accordingly
var whosTurn = function() {
  if(turn == true){
    this.className+= ' x';
    turn = false;
    xSquares = document.querySelectorAll('.x');
    for(i=xSquares.length-1; i<xSquares.length; i++){
      xWin.push(xSquares[i].id);
    }
    console.log('x was picked');
  } else {this.className+= ' o';
    turn = true;
    oSquares = document.querySelectorAll('.o');
    console.log('y was picked');
 }
  }

// Event listeners for each square
s1.addEventListener('click', whosTurn);
s2.addEventListener('click', whosTurn);
s3.addEventListener('click', whosTurn);
s4.addEventListener('click', whosTurn);
s5.addEventListener('click', whosTurn);
s6.addEventListener('click', whosTurn);
s7.addEventListener('click', whosTurn);
s8.addEventListener('click', whosTurn);
s9.addEventListener('click', whosTurn);
