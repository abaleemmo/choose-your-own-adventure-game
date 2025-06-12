// Declare variables below to save the different divs of your story.
var companyNameLoc = document.querySelector(".company-name");
var companyNameLoc2 = document.querySelector(".company-name2")
var startStoryButton = document.querySelector(".start-screen");
var firstScreen = document.querySelector(".first-screen");
var namingButton = document.querySelector(".naming-button");
var secondScreen = document.querySelector(".second-screen");
var secondScreenButton = document.querySelector(".second-screen-button");
var companyValue = document.querySelector(".company-value");
var numberOfInvestors = document.querySelector(".number-of-investors");
let companyName = "";





// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.

startStoryButton.addEventListener("click", function(){
    firstScreen.style.display = "block";
});


namingButton.addEventListener("click", function(){
    companyName = prompt("Enter the name of your company", "Big Startup");
    companyNameLoc.innerHTML = companyName;
    companyNameLoc2.innerHTML = companyName;
});

secondScreenButton.addEventListener("click", function(){
    secondScreen.style.display = "block";
});


// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });