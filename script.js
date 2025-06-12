// Declare variables below to save the different divs of your story.
var companyName;
var startStoryButton = document.querySelector(".start-screen");
var firstScreen = document.querySelector(".first-screen");
var namingButton = document.querySelector(".naming-button");
var secondScreen = document.querySelector(".second-screen");









// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.

startStoryButton.addEventListener("click", function(){
    firstScreen.style.display = "block";
});


namingButton.addEventListener("click", function(){
    companyName = prompt("Enter the name of your company", "Big Startup");
    secondScreen.style.display = "block";
});



// INSERT_VARIABLE.addEventListener('click', function(){

// });

// INSERT_VARIABLE.addEventListener('click', function(){

// });


// INSERT_VARIABLE.addEventListener('click', function(){

// });