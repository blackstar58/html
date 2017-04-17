$(window).on('load',function(){
	
$('#myModal').modal('show');
		
});



$(document).ready(function (){  
console.log('document is ready')
	
console.log('print on load')
var userSelection = null;
var computerSelection = null;
var tickMatrix = [];
	
$('#selectX').on("click",function(){	
	console.log("This is X");
	userSelection = 'X';
	computerSelection = 'O';
	console.log(userSelection)
	console.log(computerSelection)
	})//end of select X function
	
$('#selectO').on("click",function(){		
	console.log("This is O");
	userSelection = 'O';
	computerSelection = 'X';
	console.log(userSelection)
	console.log(computerSelection)
	})//end of select O function	
	

	



})//document ready




