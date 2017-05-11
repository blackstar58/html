$(window).on('load', function(){
$('#myModal').modal('show');	
});


$(document).ready(function (){ 
	
	var userSelection = null;
	var computerSelection = null;
	var tickMatrix = [];
	var userMoves = [];
	var computerMoves = [];	
	var winningMoves = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]]
	
	
	

$('#selectX').on("click",function(){	
	userSelection = 'X';
	computerSelection = 'O';
	console.log(userSelection);
	console.log(computerSelection);
	$('#myModal').modal('hide');
		})//end of select X function
	
$('#selectO').on("click",function(){		
	userSelection = 'O';
	computerSelection = 'X';
    $('#myModal').modal('hide'); 	
	nextMoves();
	})//end of select O
	
               
var theParent = document.querySelector("#workArea");
  for (var i = 0; i < theParent.children.length; i++) {
    var childElement = theParent.children[i];
    childElement.addEventListener('click', clickedElement, false);
}//end of click listener
function clickedElement(e){
	var value = parseInt(e.srcElement.id);
	tickMatrix.push(value);
	userMoves.push(value);
	e.path[0].innerHTML = userSelection; 
	nextMoves();//computer Move
}	//end of clickElement Modifier

	
function clearScreen(){
$('#myModal').modal('show');	 
	for(var k=1;k <=9;k++){
           document.getElementById(k).innerHTML = "";
           tickMatrix = [];
		   userMoves = [];
		   computerMoves = [];
        }  //end of reset for loop       
}//end of clear	

	
function assignSelection(e){
		console.log("value of assigned value: " + e)
        document.getElementById(e).innerHTML = computerSelection;
        tickMatrix.push(e);
		computerMoves.push(e);
		console.log(computerMoves);
		console.log(userMoves); 
		console.log(tickMatrix);
}	
	
function nextMoves(){
	if(userMoves.length == 0){
		assignSelection(5);	
	} else if (userMoves[0] !=5 && computerMoves.length == 0){
		assignSelection(5);
	}else if(userMoves[0] == 5 && computerMoves.length == 0){
		var min = 1;
		var max = 4;
		var firstMove = Math.floor(Math.random() * (max - min))	+ min;
		assignSelection(firstMove);
		
	} else if (tickMatrix.length >= 7) {
			   
			   clearScreen();
			  
	}else {
		console.log("next step");
		console.log("value of tick Matrix: " + tickMatrix);
		console.log("value of User Moves: " + userMoves);
        
        var whatIsNext = whoWin();
        console.log("What is Next :" + whatIsNext);
        assignSelection(whatIsNext); 
	}
}	//the computer selection
	

function whoWin(){
    for(var t = 0; t < winningMoves.length;t++){
       var computerWin = winningMoves[t].filter(isNotInComputer);
       var userWin = winningMoves[t].filter(isNotInUser);
       console.log("value of t: " + winningMoves[t]);
		console.log("User Win " + userWin);
        console.log("computer Win " + computerWin);    
        
        if(computerWin.length == 1 && tickMatrix.indexOf(computerWin[0]) < 0){
            console.log("compter can win: " + computerWin);
            return computerWin[0];
        } else if(userWin.length == 1 && tickMatrix.indexOf(userWin[0]) < 0){ //computer wins
            console.log("user can win: " + userWin); 
            return userWin[0];
        } //user wins
		
        console.log("This bounces logic!!"); 
		
        
		
		
    function isNotInComputer(value){				
      return computerMoves.indexOf(value) < 0
    }     //is Not In end
     function isNotInUser(value){
       return userMoves.indexOf(value) < 0 
    }     //is Not In end - UserMoves
    }//end of for loop
}//end of compWin	
	
	
	
	
	
})//end of document ready