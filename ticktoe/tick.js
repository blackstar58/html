$(window).on('load',function(){
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
    console.log(tickMatrix);
	console.log(computerMoves);
	console.log(userMoves);
    clickSelector();    
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
        $('#myModal').modal('show');	 
        for(var k=1;k <=9;k++){
           console.log(k);
           document.getElementById(k).innerHTML = "";
           tickMatrix = [];
		   userMoves = [];
		   computerMoves = [];
        }  //end of reset for loop     
    
    }//end of else statement

}    //grid click selector end
function randGen(){
    var maximum = 8;
    var minimum = 1;
    randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    
    
    if(tickMatrix.indexOf(randomNumber) == -1){   

        if(userMoves.length >= 2){
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

    
	
function nextMove(a){
    for(var q=0;q < winningMoves.length;q++){
        var resultsleft = winningMoves[q].filter(isNotIn);
        function isNotIn(value){
            return userMoves.indexOf(value) < 0;  
        } //end of isNotIn
        if(resultsleft.length == 1){
            console.log(resultsleft);
            q = winningMoves.length;
            return resultsleft;
            
        }
        
        console.log("value of resultsleft: " + resultsleft);
        console.log(winningMoves[q]);
                
    } //end of next Move for loop

	
}//end of next Move	
	
    
    
})//document ready




