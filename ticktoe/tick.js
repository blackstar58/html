$(window).on('load',function(){
	
$('#myModal').modal('show');
		
});



$(document).ready(function (){  
	
var userSelection = null;
var computerSelection = null;
var tickMatrix = [];
var whosMove = null;    
	
$('#selectX').on("click",function(){	
	
	userSelection = 'X';
	computerSelection = 'O';
	console.log("User selects: " + userSelection)
	console.log("Computer selects: " + computerSelection)
    $('#myModal').modal('hide');
    whosMove = 0;
    console.log(whosMove);
	})//end of select X function
	
$('#selectO').on("click",function(){		
	
	userSelection = 'O';
	computerSelection = 'X';
    whosMove = 1;
    console.log("User selects: " + userSelection)
	console.log("Computer selects: " + computerSelection)
    $('#myModal').modal('hide');
    console.log(whosMove);
	})//end of select O function	
        

var theParent = document.querySelector("#workArea");
    for (var i = 0; i < theParent.children.length; i++) {
    var childElement = theParent.children[i];
    childElement.addEventListener('click', clickedElement, false);
}//end of click listener
    
function clickedElement(e){
	var value = e.srcElement.id;
   // console.log(userSelection);
    //console.log(computerSelection);
    e.path[0].innerHTML = userSelection;
    theGame(value);    
}	//end of clickElement Modifier
	
	
function theGame(value){
     switch(value){
        case '1':
             console.log("value of whosMoveL: " + whosMove);
             console.log("value of userSelection in the Game: " + userSelection)      
             if(whosMove == 0){     
                tickMatrix.push('1',userSelection); 
                console.log(tickMatrix);
                whosMove = 1; 
	console.log("whois 0 " + computerSelection) 
             } else if(whosMove == 1) {
                 tickMatrix.push('1',computerSelection)
                 console.log(tickMatrix);
                 whosMove = 0;
             }
            break;//end of case 1
             
     
             
             
             
             
             
             
                 }//end of switch statement
}//end of the gamefunction
    
    
    

})//document ready




