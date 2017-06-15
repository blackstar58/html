$(document).ready(function (){ 
    
var userSelection = [];
var simonPattern = [];
var onOrOff = false;
var isItStrict = null;
var count = 0;	

	
	
var redSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");	
var blueSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var greenSound = new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
var yellowSound = new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");	
	
	
	
	
$('#start').on("click",function(){
	
	if(onOrOff == true){
	clearAll();
    console.log("Start Enabled"); 
    randomNumber();
	
	}
		})//end of start
    
$('#strict').on("click",function(){ 
    isItStrict = true;
      console.log(isItStrict);
  })//end of Strict

$('#myonoffswitch').on("click",function(){
    if(onOrOff == false){
         onOrOff = true;
 		clearAll();
    console.log("MMMMMM");
    console.log(onOrOff);  
    } else if(onOrOff == true){
        onOrOff = false;
        console.log(onOrOff);
    }
    
}) //On or Off switch   
    
var theParent = document.querySelector("#simonClick");
  for (var i = 0; i < theParent.children.length; i++) {
    var childElement = theParent.children[i];
    childElement.addEventListener('click', clickedElement, false);
}//end of click listener
function clickedElement(e){
if(onOrOff == true){
         console.log(e.path[0].id);
    var userClick = e.path[0].id;
	play(userClick);
    userSelection.push(userClick);
    console.log(userSelection);
        
    }
    
  }	//end of clickElement Modifier
    
 
function clearAll(){
	userSelection = [];
	simonPattern = [];
	isItStrict = null;
	console.log("All Clear");
	
}//clear all elements	
	
	
    
    
function randomNumber(){
	
    var min = 1;
		var max = 4;
		var firstMove = Math.floor(Math.random() * (max - min))	+ min;
    simonPattern.push(firstMove);
	play(firstMove);
    console.log(firstMove);
    console.log(simonPattern);
} //end of random number
    
function play(value){
	
	if(value == 1){	
		greenSound.play();
	} else if(value == 2){
		redSound.play();
	} else if(value == 3){
		yellowSound.play();
	}else if(value == 4){
		blueSound.play()
	}
}

function validation(){
    
    for(var j=0;j <=)
    
    
    
}    
    
    
    
    
}) //end of document
