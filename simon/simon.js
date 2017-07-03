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
	
$('#strict').on("click",function(){
    if(isItStrict == null){
        isItStrict = 1;
        console.log(isItStrict);
    	$('#strict').css('background','#fc3c3c');
    } else if (isItStrict == 1){
        isItStrict = null;
        console.log(isItStrict);
        $('#strict').css('background','#34d947');
    }
}) //end of strict 
    
	
$('#start').on("click",function(){
	if(onOrOff == true){
	clearAll();
    randomNumber(1);
    count++;    
	}
		})//end of start
    

$('#myonoffswitch').on("click",function(){
    if(onOrOff == false){
         onOrOff = true;
 		clearAll();
    } else if(onOrOff == true){
        onOrOff = false;
    }
    
}) //On or Off switch   
    
var theParent = document.querySelector("#simonClick");
  for (var i = 0; i < theParent.children.length; i++) {
    var childElement = theParent.children[i];
    childElement.addEventListener('click', clickedElement, false);
}//end of click listener
    
function clickedElement(e){
if(onOrOff == true){
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
    count=0;
    $("#countNumber").text('0');
	$('#1').css('background','#006400');
	$('#2').css('background','#8b0000');
	$('#3').css('background','#FCC519');
	$('#4').css('background','#052efa');
}//clear all elements	
	
	
//var timer = setInterval(randomNumber,1000);	
	
    
function randomNumber(num){
	
	var k = 0;
	while(k < num){
		var min = 1;
	var max = 5;
	var firstMove = Math.floor(Math.random() * (max - min))	+ min;
    simonPattern.push(firstMove);
	play(firstMove);
    play(simonPattern);
	count++;
	console.log("value of Count: "  + count);
    $("#countNumber").text(count);	
	k++;	
	}	
} //end of random number
    
	
function play(arr){
      for(var j=0;j < simonPattern.length;j++){        
    if(simonPattern[j] == 1){
		greenSound.play();
		//$('#1').mouseenter();
         $('#1').mouseover();
		
//			greenSound.play();
//		$('#1').css('background','#34d955');	
	//	greenSound.play();
	//	$('#1').css('background','#34d955');
		
	} else if(simonPattern[j] == 2){
		redSound.play();
		$('#2').css('background','#cc688e');
	} else if(simonPattern[j] == 3){
		yellowSound.play();
		$('#3').css('background','#F3FEA5');
	}else if(simonPattern[j] == 4){
		blueSound.play()
		$('#4').css('background','#A5DEFE');
	}
    }//end of for loop
}

    

	

    
}) //end of document
