
/* Declare all variables */
var wins = 0; 
var losses = 0; 
var currScore = 0; 
var randomNum = 0; 
var blueVal = 0; 
var greenVal = 0; 
var orangeVal = 0; 
var yellowVal = 0; 

/* Randomly assign the balloons numbers between 1 and 12 */
$(document).ready(function(){
  var currScore = 0;
  var randomNum = Math.floor(Math.random()*101 + 19); /* Target must be random number between 1 and 120 */
  var blueVal = Math.floor(Math.random()*12 + 1); 
  var greenVal = Math.floor(Math.random()*12 + 1);
  var orangeVal = Math.floor(Math.random()*12 + 1);
  var yellowVal = Math.floor(Math.random()*12 + 1);

  /* Change the value of the HTML ids to reflect values above */
  $('#randomNumber').html(randomNum);
  $('#blue').attr("data-num", blueVal);
  $('#green').attr("data-num", greenVal);
  $('#orange').attr("data-num", orangeVal);
  $('#yellow').attr("data-num", yellowVal);

});

function newGame() {

  /* console.log(blueVal) */
  currScore = 0;
  $('#totalScore').html(currScore);
  blueVal = 0;
  greenVal = 0;
  orangeVal = 0;
  yellowVal = 0;
  var randomNum = Math.floor(Math.random()*101 + 19);
  var blueVal = Math.floor(Math.random()*12 + 1);
  var greenVal = Math.floor(Math.random()*12 + 1);
  var orangeVal = Math.floor(Math.random()*12 + 1);
  var yellowVal = Math.floor(Math.random()*12 + 1);
  $('#randomNumber').html(randomNum);
  $('#blue').attr("data-num", blueVal);
  $('#green').attr("data-num", greenVal);
  $('#orange').attr("data-num", orangeVal);
  $('#yellow').attr("data-num", yellowVal);
  /* console.log(blueVal) */
}

/* Call New Game function */
newGame();

$('#blue').attr("data-num", blueVal)
$('#green').attr("data-num", greenVal)
$('#orange').attr("data-num", orangeVal)
$('#yellow').attr("data-num", yellowVal)

/* Blue balloon function */
$('#blue').on('click', function() {

  currScore += blueVal;
  $('#totalScore').html(currScore);

    if (currScore == randomNum) {
      alert("You Win!")
      wins++
      $("#wins").html("Wins: " + wins);
      newGame();

    } 

    if (currScore > randomNum) {
      alert("You Lose!")
      losses++
      $('#losses').html(losses);
      newGame();

    } 

});

/* Green balloon function */
$('#green').on('click', function() {

  currScore += greenVal;
  $('#totalScore').html(currScore);

    if (currScore == randomNum) {
      alert("You Win!")
      wins++
      $("#wins").html("Wins: " + wins);
      newGame();

    } 

    if (currScore > randomNum) {
      alert("You Lose!")
      losses++
      $('#losses').html(losses);
      newGame();

    }

});

/* Orange balloon function */
$('#orange').on('click', function() {

  currScore += orangeVal;
  $('#totalScore').html(currScore);

    if (currScore == randomNum) {
      alert("You Win!")
      wins++
      $("#wins").html("Wins: " + wins);
      newGame();

    } 

    if (currScore > randomNum) {
      alert("You Lose!")
      losses++
      $('#losses').html(losses);
      newGame();

    } 

});

/* Yellow balloon function */
$('#yellow').on('click', function() {

  currScore += yellowVal;
  $('#totalScore').html(currScore);

    if (currScore == randomNum) {
      alert("You Win!")
      wins++
      $("#wins").html("Wins: " + wins);
      newGame();

    } 

    if (currScore > randomNum) {
      alert("You Lose!")
      losses++
      $('#losses').html(losses);
      newGame();

    } 

});

