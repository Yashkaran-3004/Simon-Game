let buttonColors = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickPattern = [];

var started = false;
var level = 0;

$(document).on("keypress touchstart",function() {
  if (!started) {
    nextSequence();
    $("#level-title").text("Level " + level);
    started = true;

  }
});



/*function nextSequence() {
    userClickPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
  
    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
  }*/
    

$('.btn').on("click", function(){
  
    let userChosenColor = $(this).attr("id");
    //console.log(userChosenColor);
    userClickPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickPattern.length-1);
    
})


function playSound(name){
    let audio = new Audio(`./sounds/${name}.mp3`);
    audio.play();
}


function animatePress(currentColor){

    $(`#${currentColor}`).addClass('pressed');

    setTimeout( function(){
        $(`#${currentColor}`).removeClass('pressed');
        
    }, 100);


}


function checkAnswer(currentLevel){

    if(gamePattern[currentLevel]===userClickPattern[currentLevel]){
        if(gamePattern.length === userClickPattern.length){
            setTimeout(() => {
                nextSequence();
                
            }, 1000);
        }
        
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");

        setTimeout(() => {
            $("body").removeClass("game-over");
            
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }

}

function startOver(){
    started = false;
    level = 0;
    gamePattern = [];
}

function nextSequence(){
    userClickPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    

    var randomNumber = Math.floor(Math.random()*4);
    //var randomNumber = Math.floor(Math.random() * 4);
    
    var randomChosenColor =  buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}





