$(document).ready(function (){ 
    
var userSelection = [];
var simonPattern = [];
var onOrOff = false;
var isItStrict = null;
var count = 0;	
var userCount = 0;
	
	
var redSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");	
var blueSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
var greenSound = new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
var yellowSound = new Audio ("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");	
var fail = new Audio('http://reduxloop.com/sound/wrong.mp3');	
var win = new Audio('http://reduxloop.com/sound/win.mp4');	
	
	
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
   $("#countNumber").text(count);	
	
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
    if(userSelection.length == 0 && count == 1){
	   var userClick = parseInt(e.path[0].id); 
        userSelection.push(userClick); 
        compare(userSelection)
    } else if(userSelection.length < count && userSelection.length != 0){  
	   var userClick = e.path[0].id;
       userSelection.push(userClick);
        compare(userSelection);
        console.log("In Second part")
    } else if(userSelection.length == count){
        var userClick = e.path[0].id;
       userSelection.push(userClick);
        compare(userSelection);
        console.log("Third")        
    } //end of if statement

    }//end of onandff
  }	//end of clickElement Modifier
 
$('#countNumber').unbind("click");
$('#b').unbind("click");
 
    
function clearAll(){
	userSelection = [];
	simonPattern = [];
	isItStrict = null;
    count=0;
	userCount = 0;
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
	//play(firstMove);
    play(simonPattern);
    $("#countNumber").text(count);	
	k++;	
	}	
} //end of random number


function compare(arr1){
   var compareArray = arr1.filter(compareElement);
	console.log(compareArray)
	if(compareArray.length == 0){
		console.log("Success!!");
		win.play();
        count++;
        userCount = 0;
        userSelection = [];
        simonPattern = [];
        randomNumber(count)
	} else {
		console.log("Failure!!");
		fail.play();
        userCount = 0;
        userSelection = [];
        play(simonPattern)
        return false
	}

}//compare function	

function compareElement(e){
		return simonPattern.indexOf(e) < 0
}	//compareElement Array
function play(arr){
	console.log(arr);
      for(var j=0;j < arr.length;j++){    
    if(arr[j] == 1){
		change('#006400','#34d955',j,j,'#1');		
	} else if(arr[j] == 2){
		change('#8B0000','#E8A5A5',j,j,'#2');
	} else if(arr[j] == 3){
		change('#FCC519','#F3FEA5',j,j,'#3');
	}else if(arr[j] == 4){
		change('#052efa','#A5DEFE',j,j,'#4');
	}
    }//end of for loop
} //end of play

function change(color1, color2,c1,c2,button){

setTimeout(function(){
 var timer = setInterval(function first_color() {	 
	 if(color2 == '#34d955'){
		$(button).css('background',color2); 
		greenSound.play()
		} else if(color2 == '#E8A5A5'){
			$(button).css('background',color2);
	 	redSound.play()
 		} else if(color2 =='#F3FEA5'){
			$(button).css('background',color2);
			yellowSound.play();
		}else if(color2 == '#A5DEFE'){
			$(button).css('background',color2);
			blueSound.play()
		}
       setTimeout(change_color, 500);
   }, 500*c2);//	
	 function change_color() {
		$(button).css('background',color1);
		 clearInterval(timer);
    }//end of change color function	
},700*c2)//setTimeOut
} //end of change  function 
	

    

	

    
}) //end of document
