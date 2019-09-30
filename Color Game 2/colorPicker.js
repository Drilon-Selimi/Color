//declare variables

var displayColor = document.querySelector("#titleColor");
var jumbo = document.querySelector(".jumbotron");

var squareAll = document.querySelectorAll(".square");

var modeButton = document.querySelectorAll(".mode");
    
var message = document.querySelector("#message");
var resetButton = document.querySelector("#res");
var secondRow = document.querySelector("#secondRow");


var correctColor;
    
var colors = [];

var numColors = 6;


initialize();

function initialize() {

    //choose 3/6 random colors, update squares
    chooseColors();
    
    //chose one of these colors to be "correct"
    chooseCorrectColor();
    
    //restore default values
    setDefaults();
}

function setDefaults(){
    
    jumbo.style.backgroundColor = "cornflowerblue";
    resetButton.textContent = "NEW GAME";
    message.textContent = "";
    
    
}

//Randomly pick colors

function chooseColors() {
    
    colors = [];
  for(var i=0; i<numColors; i++) {
      // get a random RGB color
      var rValue = getRandomValue(256);
       var gValue = getRandomValue(256);
       var bValue = getRandomValue(256);
      
      
      
      //added space to match CSS default format
      var col = "rgb(" + rValue + ", " + gValue + ", " + bValue + ")";
      
      squareAll[i].style.backgroundColor = col;
      //add it to the colors array
      colors.push(col);
  }  
    
}
//Randomly pick the main color
function chooseCorrectColor() {
    
    //get a random number between 0 and 6
    var index = getRandomValue(numColors);
    correctColor = colors[index];
    //update page
    displayColor.textContent = correctColor;
    
    
}

//Get a random value between 0 and 255
function getRandomValue(limit) {
    
    return Math.floor(Math.random()*limit);
}



//setup new color button
resetButton.addEventListener("click", initialize);


//setup easy/hard buttons
modeButton.forEach( function(elem, index){
    elem.addEventListener("click", function(){
        
   if(!elem.classList.contains("selected")){
       
       modeButton[0].classList.toggle("selected");
       modeButton[1].classList.toggle("selected");
       if(index===0)
           numColors=3;
       else
           numColors=6;
       secondRow.classList.toggle("d-none");
       initialize();
   }
        
        
        
    });
    
    
});

//check to see if clicked quares is correct

squareAll.forEach(function(eleme){
    eleme.addEventListener("click", function(){
       
        if(eleme.style.backgroundColor === correctColor){
            
            message.textContent = "Correct";  
            //add instrutions here
            for(var i=0; i<6; i++)
                squareAll[i].style.backgroundColor = correctColor;
            jumbo.style.backgroundColor = correctColor;
            
            resetButton.textContent = "NEW GAME";
            
        }
        else{
            
        message.textContent = "Try again";
            eleme.style.backgroundColor = "black";
        }
    });
});