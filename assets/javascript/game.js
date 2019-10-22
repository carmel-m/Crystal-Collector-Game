$(document).ready(function () {

  // Declare global variables
  var wins = 0;
  var losses = 0;
  var counter = 0;
  var targetNum;
  var crystalNum1;
  var crystalNum2;
  var crystalNum3;
  var crystalNum4;


  // generate random numbers for target and crystals
  function randomNumbers() {
    targetNum = Math.floor((Math.random() * 75) + 15);
    $("#target-number").text(targetNum);
    crystalNum1 = Math.floor((Math.random() * 12) + 1);
    crystalNum2 = Math.floor((Math.random() * 12) + 1);
    crystalNum3 = Math.floor((Math.random() * 12) + 1);
    crystalNum4 = Math.floor((Math.random() * 12) + 1);
  }

  // reset function 
  function reset() {
    counter = 0;
    randomNumbers();
    $("#counter").text(counter);
  }

  // make text display/update on the page
  $("#target-number").text(targetNum);
  $("#win-tally").text(wins);
  $("#loss-tally").text(losses);
  $("#counter").text(counter);

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
    $("#counter").text(counter);
    checkScore();
  });

  $("#crystal-2").on("click", function () {
    $(this).val();
    console.log($(this).val());
    counter += crystalNum2;
    $("#counter").text(counter);
    checkScore();
  });

  $("#crystal-3").on("click", function () {
    $(this).val();
    console.log($(this).val());
    counter += crystalNum3;
    $("#counter").text(counter);
    checkScore();
  });

  $("#crystal-4").on("click", function () {
    $(this).val();
    console.log($(this).val());
    counter += crystalNum4;
    $("#counter").text(counter);
    checkScore();
  });


  // function to check score and determine if win or loss
  function checkScore() {
    if (counter === targetNum) {
      wins++;
      $("#win-tally").text(wins);
      alert("You won!");
      reset();
    }

    if (counter > targetNum) {
      losses++;
      $("#loss-tally").text(losses);
      alert("You lost :(");
      reset();
    }
  }

  randomNumbers();


});
