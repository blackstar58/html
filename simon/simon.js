$(document).ready(function (){ 
    
var userSelection = [];
var simonPattern = [];
var onOrOff = false;
var isItStrict = null;

$('#start').on("click",function(){	
      console.log("Start Enabled"); 
    randomNumber();
		})//end of start
    
$('#strict').on("click",function(){ 
    isItStrict = true;
      console.log(isItStrict);
  })//end of Strict

$('#myonoffswitch').on("click",function(){
    if(onOrOff == false){
         onOrOff = true;
        userSelection = [];
        simonPattern = [];
        isItStrict = null;
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
    userSelection.push(userClick);
    console.log(userSelection);
        
    }
    
  }	//end of clickElement Modifier
    
    
    
function randomNumber(){
    var min = 1;
		var max = 4;
		var firstMove = Math.floor(Math.random() * (max - min))	+ min;
    simonPattern.push(firstMove);
    console.log(firstMove);
    console.log(simonPattern);
} 
    
function validation(){
    
    
}    
    
    
    
    
}) //end of document
