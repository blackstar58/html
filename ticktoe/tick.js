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
var randomNumber = 0;
    
//selection logic


	
	
function displayChoice(rand){
	document.getElementById(rand).innerHTML = computerSelection;
	tickMatrix.push(rand);
	computerMoves.push(rand);
}	//display the computers choice
	
		
function clickSelector(){ 
	console.log("start of click functions: " + userMoves);
	if(userMoves.length == 0){
		console.log("inside")
    	randomNumber = 5;
		displayChoice(randomNumber); 
		
		//assign start value if use did not select anything
    } else if (userMoves[0] != 5 && computerMoves.length == 0) {
		console.log("what is user movve " + userMoves);
        randomNumber = 5;
		displayChoice(randomNumber);//if user does not select something and its the systems first move
		
    } else if (computerMoves.length == 0){
	          var winMove = winOpp(computerMoves);
            console.log("This is a winning move: " + winMove);
			displayChoice(winMove);
		return;
			   }
  
	winOrLose();
	//can I win 
	
	if(computerMoves.length >= 1){
            var winMove = winOpp(computerMoves);
            console.log("This is a winning move: " + winMove);
			displayChoice(winMove);
        } else if (userMoves.length >= 2){
        var blockMove = nextMove(userMoves);    
        console.log("This is a block move: " + blockMove)
        displayChoice(blockMove);
    }
}    //end of click selector

	

	    
//Start of selection service
	
$('#selectX').on("click",function(){	
	userSelection = 'X';
	computerSelection = 'O';
    $('#myModal').modal('hide');
	})//end of select X function
	
$('#selectO').on("click",function(){		
	userSelection = 'O';
	computerSelection = 'X';
    whosMove = 1;
    $('#myModal').modal('hide');
	
    clickSelector();
	})//end of select O function	
        
        
var theParent = document.querySelector("#workArea");
  for (var i = 0; i < theParent.children.length; i++) {
    var childElement = theParent.children[i];
    childElement.addEventListener('click', clickedElement, false);
}//end of click listener
    
function clickedElement(e){
	var value = e.srcElement.id;
    e.path[0].innerHTML = userSelection;    
}	//end of clickElement Modifier
    var theMatrixParent = document.querySelector("#theGrid");
    	for (var j = 0; j < theMatrixParent.children.length;j++){
        var subElement = theMatrixParent.children[i];
        subElement.addEventListener('click',userAssign,false);
    } // end of the grid selector
 
	
function userAssign(e){
    console.log(e.srcElement.id);
    var value = parseInt(e.srcElement.id);
    tickMatrix.push(value);
	userMoves.push(value);
<<<<<<< Updated upstream
    clickSelector();    
}   
    
function clearEverything(){
     $('#myModal').modal('show');	 
        for(var k=1;k <=9;k++){
           console.log(k);
=======
    clickSelector()    
}    
//end of selection service  
//!!! need to add to this 	
	
function clearScreen(){
$('#myModal').modal('show');	 
	for(var k=1;k <=9;k++){
>>>>>>> Stashed changes
           document.getElementById(k).innerHTML = "";
           tickMatrix = [];
		   userMoves = [];
		   computerMoves = [];
<<<<<<< Updated upstream
        }  //end of reset for loop     
    
}
    
function clickSelector(){ 
    
    if(randGen() == true){
        console.log("random number in true: " + randomNumber)
        document.getElementById(randomNumber).innerHTML = computerSelection;
        tickMatrix.push(randomNumber);
		computerMoves.push(randomNumber);
		console.log(computerMoves);
		console.log(userMoves);
        k = tickMatrix.length;
    } else if (randGen() == false){
    clearEverything();   
    
    }//end of else statement

}    //grid click selector end
function randGen(){
    var maximum = 8;
    var minimum = 1;
    randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    
    console.log(userMoves.length);
     console.log("random before if statment :" + randomNumber)
    if(userMoves.length == 0){
        console.log("ping")
        randomNumber = 5;
    } else if (userMoves[0] != 5 && computerMoves.length == 0) {
        console.log("ping 2")
               randomNumber = 5;  
        }

    
    console.log("random after if :" + randomNumber)
    
    if(tickMatrix.indexOf(randomNumber) == -1){   
    
        if(computerMoves.length >= 1){
            var winMove = winOpp(computerMoves);
            console.log("This is a winning move: " + winMove);
            randomNumber = winMove;
        } else if (userMoves.length >= 2){
        var blockMove = nextMove(userMoves);    
        console.log("This is a block move: " + blockMove)
        randomNumber = blockMove[0];
    }
       return true;
    } else if(tickMatrix.length <= 8) { 
        randGen();
        return true;
    }
    return false;
}    //end of random generator

    
=======
	} //end of for loop
}	//clear all elements on the page
>>>>>>> Stashed changes
	
	 
function nextMove(a){
	console.log("block");0
    for(var q=0;q < winningMoves.length;q++){
        var resultsleft = winningMoves[q].filter(isNotIn);
        function isNotIn(value){
            return tickMatrix.indexOf(value) < 0;  
        } //end of isNotIn
        if(resultsleft.length == 1){
            console.log(resultsleft);
            q = winningMoves.length;
            return resultsleft;
        }
                
    } //end of next Move for loop
	
}//end of next Move	

function winOpp(){
	console.log("win")
     for(var q=0;q < winningMoves.length;q++){
        var resultsleft = winningMoves[q].filter(isNotIn);
        	function isNotIn(value){
            	return (computerMoves.indexOf(value) < 0 && userMoves.indexOf(value) < 0 && tickMatrix.indexOf(value) < 0);  
        			} //end of isNotIn
        console.log(tickMatrix);
		 console.log(winningMoves[q]);
		 
		 if(resultsleft.length == 1){
            console.log("only one winning value " + resultsleft);
            q = winningMoves.length;
            return resultsleft;
        } else if(resultsleft.length == 2){
            var oneMove = resultsleft[0];
            console.log("chance move: " + oneMove);
            q = winningMoves.length;
            return resultsleft[0];
        }
                 
    } //end of next Move for loop

}//end of winning move    
    
function winOrLose(){
	
	for(var t = 0; t < winningMoves.length;t++){
		
		var computerWin = winningMoves[t].filter(isNotIn);
		var userWin = winningMoves[t].filter(isNotIn);
		
		if(computerWin.length == 1){
			
			console.log("computer can win:" + computerWin);
		} else if (userWin.length == 1){
			
			console.log("user can win: " + userWin);
		
		}
		
		
		function isNotIn(value){
            	return (computerMoves.indexOf(value) < 0 && userMoves.indexOf(value) < 0 && tickMatrix.indexOf(value) < 0);  
        			} //end of isNotIn
		
		
	}
	
	
	
}
	
	
	
})//document ready




