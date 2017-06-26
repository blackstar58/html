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
    randomNumber(1);	
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
 
$('#countNumber').unbind("click");
$('#b').unbind("click");
 
function clearAll(){
	userSelection = [];
	simonPattern = [];
	isItStrict = null;
	 $("#countNumber").text('0');
	$('#1').css('background','#006400');
	$('#2').css('background','#8b0000');
	$('#3').css('background','#FCC519');
	$('#4').css('background','#052efa');
	console.log("All Clear");
	
}//clear all elements	
	
	
//var timer = setInterval(randomNumber,1000);	
	
    
function randomNumber(num){
	
	for(var d = 0;d < num;d++){	
		console.log(d);
	}
	
	
	
    var min = 1;
		var max = 5;
		var firstMove = Math.floor(Math.random() * (max - min))	+ min;
    simonPattern.push(firstMove);
	play(firstMove);
    console.log(firstMove);
    console.log(simonPattern);
	count++;
	console.log("value of Count: "  + count);
	 $("#countNumber").text(count);
} //end of random number
    

setInterval(,2000);	
	
	
	
function play(arr){
	
	for(var t = 0;t < simonPattern.;)
	
	if(value == 1){	
		greenSound.play();
		$('#1').css('background','#34d955');
	} else if(value == 2){
		redSound.play();
		$('#2').css('background','#cc688e');
	} else if(value == 3){
		yellowSound.play();
		$('#3').css('background','#F3FEA5');
	}else if(value == 4){
		blueSound.play()
		$('#4').css('background','#A5DEFE');
	}
}

function validation(){
    
    
	
}    
    
    
    
    
}) //end of document
