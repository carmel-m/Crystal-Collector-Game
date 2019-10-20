// Declare global variables
var numberOptions = [3, 5, 7, 10];
var wins = 0;
var losses = 0;
var totalScore = 0;

// generate random targetNumber
var targetNumber = Math.floor((Math.random() * 75) + 15);

// make text display/update on the page
$("#target-number").text(targetNumber);
$("#win-tally").text(wins);
$("#loss-tally").text(losses);
$("#total-score").text(totalScore);


// for loop to create new crystal - different number options will be randomly attributed to crystal images

for (var i = 0; i < numberOptions.length; i++) {


}

// add click event function to extract correct crystal value (use $(this))




// EXAMPLE FROM CLASS ACTIVITY 

// Next we create a for loop to create crystals for every numberOption.
for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }
