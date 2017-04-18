$(window).on('load',function(){
	
$('#myModal').modal('show');
		
});



$(document).ready(function (){  
	
var userSelection = null;
var computerSelection = null;
var tickMatrix = [];
	
$('#selectX').on("click",function(){	
	
	userSelection = 'X';
	computerSelection = 'O';
	console.log("User selects: " + userSelection)
	console.log("Computer selects: " + computerSelection)
    $('#myModal').modal('hide');
    theGame(userSelection,computerSelection);
	})//end of select X function
	
$('#selectO').on("click",function(){		
	
	userSelection = 'O';
	computerSelection = 'X';
    console.log("User selects: " + userSelection)
	console.log("Computer selects: " + computerSelection)
    $('#myModal').modal('hide');
    theGame(userSelection,computerSelection);
	})//end of select O function	

  var theParent = document.querySelector("#workArea");
   
    for (var i = 0; i < theParent.children.length; i++) {
    var childElement = theParent.children[i];
      
    childElement.addEventListener('click', doSomething, false);
}
    
function doSomething(e){
	var value = e.srcElement.id;
	console.log(value);
	
}	
	
	
function theGame(userSelection,computerSelection){
    console.log(userSelection + ":" + computerSelection);
	
	
    
    
}
    
    
    

})//document ready




