// array of colors.
var buttonColors = ["red", "green","blue","yellow"];

// array of colors for game Pattern. Using random color at the very end.
var gamePattern = [];

// array of user clicked pattern.
var userClickedPattern = [];

//Initial state of the game.
var started=false;
var level = 0;

//detecting key press to start the game.
$(document).keydown (function(){
    if(!started){
        $("level-title").text= ("Level" + level);
        nextSequence();
        started = true;
    }

}); 

// Detecting which button got clicked.
$(".btn").click (function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
    
});

//Checking game pattern and user click pattern.
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if(gamePattern.length === userClickedPattern.length){
            setTimeout (function(){
            nextSequence();
        },1000);
        }
    } else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text ("Game over! Press any key to restart the game.");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
       
        startOver();

        }
}


// Function to generate random number.
function nextSequence(){

    userClickedPattern = []; //creating an empty array ready for the next level each time this function is called.
    level++;
    $("#level-title").text ("Level" + level); //incresing the level by 1 each time this function is called.

    var randomNumber= Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    // Giving the random color animation.
    $("#" + randomChosenColor).fadeIn(200).fadeOut(200).fadeIn(200);

    playSound(randomChosenColor);

}

// Playing sound for randomly selected button color.
function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();

}

// adding effect to the user pressed keys.
function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 100);

}

// function to start over the game.
function startOver(){
    level = 0;
    gamePattern = [];
    started= false;
}





    

 







