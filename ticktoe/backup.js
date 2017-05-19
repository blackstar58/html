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
        document.getElementById(e).innerHTML = computerSelection;
        tickMatrix.push(e);
		computerMoves.push(e);
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
		
	} else if (tickMatrix.length >= 8) {		   
			   clearScreen();
			  
	}else {
		console.log("next step");
        var whatIsNext = whoWin();
        assignSelection(whatIsNext)
        haveIWon()
    
    }
}	//the computer selection
	
	
function whoWin(){   
    var backup = [];
    var uPossibleMoves = [];
    var compPossibleMoves = [];
	
    for(var t = 0; t < winningMoves.length;t++){
		var computerWin = winningMoves[t].filter(isNotInComputer);
       var userWin = winningMoves[t].filter(isNotInUser);
        
        if(computerWin.length == 1 && tickMatrix.indexOf(computerWin[0]) < 0){
            compPossibleMoves.push(computerWin[0]);
            //return computerWin[0];
        } else if(userWin.length == 1 && tickMatrix.indexOf(userWin[0]) < 0){ //computer wins
            uPossibleMoves.push(userWin[0])
;           // return userWin[0];//user wins
        } else if(computerWin.length == 2 && tickMatrix.indexOf(computerWin[0]) < 0 ){   
            backup.push(computerWin);
        }
    
/*	console.log("Value of Possible: " + uPossibleMoves);
    console.log("Value of Computer: " + compPossibleMoves);
    console.log("Value of backup: " + backup); */
		
		if(compPossibleMoves.length >= 1 && t == 7){		
	//		console.log("The Value of CompPossible: "+ compPossibleMoves);
			
			return compPossibleMoves;
		} else if (uPossibleMoves.length >= 1 && t == 7 ){
			return uPossibleMoves[0];	
		}else if(t == 7) {
			
		//	console.log("In Side")
			return backup[0][0];
		}
    }//end of for loop
	

}//end of compWin	

function isNotInComputer(value){				
      return computerMoves.indexOf(value) < 0
    }     //is Not In end
function isNotInUser(value){
       return userMoves.indexOf(value) < 0
    }     //is Not In end - UserMoves	
    
function haveIWon(){
    
    computerMoves.sort(function(a, b) {
  return a - b;
});
    console.log("User Moves in Have I won! " + userMoves);
    console.log("Computer Moves in Have I won! " + computerMoves);
   
    for(var m = 0;m < winningMoves.length;m++){
        
        var computerHasWon = winningMoves[m].filter(isNotInComputer);
        console.log("computer has Won " + computerHasWon.length)
        var userHasWon = winningMoves[m].filter(isNotInUser);
        console.log("user has Won " + userHasWon.length)
        if(computerHasWon.length == 0){
            console.log("Computer Won");
        } else if(userHasWon.length == 0){
            console.log("User Won");
        }//user has won
    }//end of for loop
    
}    //end of have I Won


	
	
	
	
	
	
	
})//end of document ready