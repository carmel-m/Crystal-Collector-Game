$(document).ready(function () {

  // Declare global variables
  var wins = 0;
  var losses = 0;
  var totalScore = 0;
  var counter = 0;

  // generate random numbers for target and crystals
  var targetNum = Math.floor((Math.random() * 75) + 15);
  var crystalNum1 = Math.floor((Math.random() * 12) + 1);
  var crystalNum2 = Math.floor((Math.random() * 12) + 1);
  var crystalNum3 = Math.floor((Math.random() * 12) + 1);
  var crystalNum4 = Math.floor((Math.random() * 12) + 1);

  // function reset() {
  //   guessesLeft = 9;
  //   userGuesses = [];
  //   randomLetter = letterArray[Math.floor(Math.random() * letterArray.length)];
  //   console.log(randomLetter);
  // }

  // make text display/update on the page
  $("#target-number").text(targetNum);
  $("#win-tally").text(wins);
  $("#loss-tally").text(losses);
  $("#total-score").text(totalScore);

  // generate random number btwn 1-12 and assign to each crystal
  $("#crystal-1").val(crystalNum1);
  $("#crystal-2").val(crystalNum2);
  $("#crystal-3").val(crystalNum3);
  $("#crystal-4").val(crystalNum4);


  //on click events to extract correct value from each crystal and add to counter
  $("#crystal-1").on("click", function () {
    $(this).val();
    console.log($(this).val());
    counter += crystalNum1;
    alert("New score: " + counter);
  });

  $("#crystal-2").on("click", function () {
    $(this).val();
    console.log($(this).val());
    counter += crystalNum2;
    alert("New score: " + counter);
  });

  $("#crystal-3").on("click", function () {
    $(this).val();
    console.log($(this).val());
    counter += crystalNum3;
    alert("New score: " + counter);
  });

  $("#crystal-4").on("click", function () {
    $(this).val();
    console.log($(this).val());
    counter += crystalNum4;
    alert("New score: " + counter);
  });


  // win/loss logic
  // SCOPE ISSUES - figure out where to put this
  if (counter === targetNum) {
    wins++;
    alert("You win!");
    // reset();
  }

  else if (counter >= targetNum) {
    losses++;
    alert("You lose!!");
    // reset();
  }


});
