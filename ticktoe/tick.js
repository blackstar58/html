$(window).on('load',function(){
	
$('#myModal').modal('show');
		
});



$(document).ready(function (){  
	
var userSelection = null;
var computerSelection = null;
var tickMatrix = [];
var whosMove = null; 
var tempArray = [];
	
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
}	//end of clickElement Modifier

    
var theMatrixParent = document.querySelector("#theGrid");
    for (var j = 0; j < theMatrixParent.children.length;j++){
        var subElement = theMatrixParent.children[i];
        subElement.addEventListener('click',clickSelector,false);
    } // end of the grid selector

function clickSelector(e){
    
    console.log(e.srcElement.id);
    var value = e.srcElement.id;
    tickMatrix.push(value);
    console.log(tickMatrix)
    
    if(whosMove == 0){
        
        var maximum = 9;
        var minimum = 1;
        var randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        console.log(randomnumber);
        
        for (var k = 0; k < tickMatrix.length;k++){
            
            if(randomnumber == k[i]){
                
                randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
                console.log( "new number: " + randomnumber);
                
            } else {
                console.log("in theloop")
                document.getElementById(randomnumber).innerHTML = computerSelection;
                tempArray.push(randomnumber);
                console.log(tempArray);
                whosMove = 0;
                console.log("in matrix:" + whosMove);
                k = tickMatrix.length;
                
            }
            console.log(tempArray);
            tickMatrix.concat(tempArray);
            console.log(tickMatrix);
            tempArray = [];
            
        }//random click element
        
    }  //end of if statment
    
    
    
    
}    //grid click selector end
    


function computerLogic(){
    
    
    
    
    
}    
    
    

})//document ready




