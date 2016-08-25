// Custom JavaScript by Garrett Estrin | GarrettEstrin.com

// Variable for all squares
var $sqrs = $('.square');
// Variable for message area
var $message = $('.message');
var $box1 = $('#box1');
var $box2 = $('#box2');
var $box3 = $('#box3');
var $box4 = $('#box4');
var $box5 = $('#box5');
var $box6 = $('#box6');
var $box7 = $('#box7');
var $box8 = $('#box8');
var $box9 = $('#box9');
// Variable for turn
var $turn = true;
// Variable for turn number
var $turnNum = 1;
// Array for picks
var $picks = [];

// Function to select either X or O
var makeSelection = function() {
  if($turn == true) {
    $(this).addClass('x');
    $turn = false;
    console.log($(this).attr('id'));
    $(this).attr('player', 'x');
    $picks[$(this).attr('data-box') - 1] = $(this).attr('player');
    $turnNum = $turnNum + 1;
    $(this).off('click');
    winx();
  }else {
    $(this).addClass('o');
    $turn = true;
    console.log($(this).attr('id'));
    $(this).attr('player', 'o');
    $picks[$(this).attr('data-box') - 1] = $(this).attr('player');
    $turnNum = $turnNum + 1;
    $(this).off('click');
    wino();
  }
}

// Add click event listeners to boxes
$sqrs.on('click', makeSelection)

// Game win logic
var winx = function(){
  if($picks[0] == 'x' && $picks[1] == 'x' && $picks[2] == 'x'){
    $message.text('Player X Wins!');
    $sqrs.off('click');
  }
  else if ($picks[3] == 'x' && $picks[4] == 'x' && $picks[5] == 'x'){
    $message.text('Player X Wins!');
    $sqrs.off('click');
  }
  else if ($picks[6] == 'x' && $picks[7] == 'x' && $picks[8] == 'x'){
    $message.text('Player X Wins!');
    $sqrs.off('click');
  }
  else if ($picks[0] == 'x' && $picks[3] == 'x' && $picks[6] == 'x'){
    $message.text('Player X Wins!');
    $sqrs.off('click');
  }
  else if ($picks[1] == 'x' && $picks[4] == 'x' && $picks[7] == 'x'){
    $message.text('Player X Wins!');
    $sqrs.off('click');
  }
  else if ($picks[2] == 'x' && $picks[5] == 'x' && $picks[8] == 'x'){
    $message.text('Player X Wins!');
    $sqrs.off('click');
  }
  else if ($picks[0] == 'x' && $picks[4] == 'x' && $picks[8] == 'x'){
    $message.text('Player X Wins!');
    $sqrs.off('click');
  }
  else if ($picks[6] == 'x' && $picks[4] == 'x' && $picks[2] == 'x'){
    $message.text('Player X Wins!');
    $sqrs.off('click');
  }
  }

var wino = function(){
  if($picks[0] == 'o' && $picks[1] == 'o' && $picks[2] == 'o'){
    $message.text('Player O Wins!');
    $sqrs.off('click');
  }
  else if ($picks[3] == 'o' && $picks[4] == 'o' && $picks[5] == 'o'){
    $message.text('Player O Wins!');
    $sqrs.off('click');
  }
  else if ($picks[6] == 'o' && $picks[7] == 'o' && $picks[8] == 'o'){
    $message.text('Player O Wins!');
    $sqrs.off('click');
  }
  else if ($picks[0] == 'o' && $picks[3] == 'o' && $picks[6] == 'o'){
    $message.text('Player O Wins!');
    $sqrs.off('click');
  }
  else if ($picks[1] == 'o' && $picks[4] == 'o' && $picks[7] == 'o'){
    $message.text('Player O Wins!');
    $sqrs.off('click');
  }
  else if ($picks[2] == 'o' && $picks[5] == 'o' && $picks[8] == 'o'){
    $message.text('Player O Wins!');
    $sqrs.off('click');
  }
  else if ($picks[0] == 'o' && $picks[4] == 'o' && $picks[8] == 'o'){
    $message.text('Player O Wins!');
    $sqrs.off('click');
  }
  else if ($picks[6] == 'o' && $picks[4] == 'o' && $picks[2] == 'o'){
    $message.text('Player O Wins!');
    $sqrs.off('click');
  }
  }
