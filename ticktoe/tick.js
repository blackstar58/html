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
	
$('#selectX').on("click",function(){	
	userSelection = 'X';
	computerSelection = 'O';
    $('#myModal').modal('hide');
	})//end of select X function
	
$('#selectO').on("click",function(){		
	userSelection = 'O';
	computerSelection = 'X';
    $('#myModal').modal('hide');
 												Attention
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
}   
	
function clearScreen(){
$('#myModal').modal('show');	 
	for(var k=1;k <=9;k++){
           document.getElementById(k).innerHTML = "";
           tickMatrix = [];
		   userMoves = [];
		   computerMoves = [];
        }  //end of reset for loop       
}//end of clear
	
	
	
	
})//document ready




