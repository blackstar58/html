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
		canIWin();
        var whatIsNext = whoWin();
        assignSelection(whatIsNext); 
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
    
	console.log("Value of Possible: " + uPossibleMoves);
    console.log("Value of Computer: " + compPossibleMoves);
    console.log("Value of backup: " + backup);
		
		if(compPossibleMoves.length >= 1 && t == 7){		
			console.log("The Value of CompPossible: "+ compPossibleMoves);
			
			return compPossibleMoves;
		} else if (uPossibleMoves.length >= 1 && t == 7 ){
			console.log("Ping")
			return uPossibleMoves[0];	
		}else if(t == 7) {
			
			console.log("In Side")
			return backup[0][0];
		}
		console.log("End of Ping")
		
    }//end of for loop
	

}//end of compWin	

function isNotInComputer(value){				
      return computerMoves.indexOf(value) < 0
    }     //is Not In end
function isNotInUser(value){
       return userMoves.indexOf(value) < 0 
    }     //is Not In end - UserMoves	
	

function canIWin(){
	

	
	for(var n = 0; n< winningMoves.length; n++){
		
		var computerPingWin = winningMoves[n].filter(isNotInComputer);
		var userPingWin = winningMoves[n].filter(isNotInUser);
		
		if(computerPingWin.length == 1 && tickMatrix.indexOf(compPossibleMoves[0]) <0){
			//console.log("Value is Single: " + computerPingWin[0]);
			compPossibleMoves.push(computerPingWin[0]);
		}else if(userPingWin.length == 1 && tickMatrix.indexOf(userPingWin[0]) < 0){
		//	console.log("Value for user To Win: " + compPossibleMoves[0]);
			uPossibleMoves.push(userPingWin[0]);
		}
	}
	
	//console.log("User Possible Win Moves: " + uPossibleMoves);
	//console.log("Computer Possible Win Moves: " + compPossibleMoves);
	
}//can I will End 	

	
	
	
	
	
	
	
})//end of document ready