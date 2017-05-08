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
	console.log("Computers First Move");
		assignSelection(5);	
	} else if (userMoves[0] !=5 && computerMoves.length == 0){
		assignSelection(5);
	} else {
		console.log("next step");
		console.log(tickMatrix);
		console.log(userMoves);
	}
}	//the computer selection
	

function compWin(){
	
	
	
}	
	
	
	
	
	
})//end of document ready