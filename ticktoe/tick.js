$(window).on('load',function(){
$('#myModal').modal('show');	
});

$(document).ready(function (){  
	
var userSelection = null;
var computerSelection = null;
var tickMatrix = [];
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
    console.log(tickMatrix)
    clickSelector();    
}    

function clickSelector(){   
    if(randGen() == true){
        console.log("random number in true: " + randomNumber)
        document.getElementById(randomNumber).innerHTML = computerSelection;
        tickMatrix.push(randomNumber);
        whosMove = 0;
        console.log("in matrix:" + whosMove);        
        k = tickMatrix.length;
    } else if (randGen() == false){
        $('#myModal').modal('show');	 
        for(var k=1;k <=9;k++){
            console.log(k);
           document.getElementById(k).innerHTML = "";
            tickMatrix = [];
        }  //end of reset for loop     
    
    }//end of else statement

}    //grid click selector end
function randGen(){
    var maximum = 8;
    var minimum = 1;
    
    randomNumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    console.log("result in randGen: " + randomNumber);
    
    console.log(tickMatrix.indexOf(randomNumber) == -1);
    if(tickMatrix.indexOf(randomNumber) == -1){                                       
        return true;
    } else if(tickMatrix.length <= 8) { 
        randGen();
        return true;
    }
    return false;
}    //end of random generator
    
    
    
})//document ready




