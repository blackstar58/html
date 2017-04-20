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
    
	
/*function theGame(value){
     switch(value){
        case '1':
             console.log("value of whosMoveL: " + whosMove);
             console.log("value of userSelection in the Game: " + userSelection)      
             if(whosMove == 0){     
                tickMatrix.push('1'); 
                console.log(tickMatrix);
                whosMove = 1; 
	console.log("whois 0 " + computerSelection) 
             } else if(whosMove == 1) {
                 tickMatrix.push('1',computerSelection)
                 console.log(tickMatrix);
                 whosMove = 0;
             }
            break;//end of case 1
         case '2':
             console.log("value of whosMoveL: " + whosMove);
             console.log("value of userSelection in the Game: " + userSelection)      
             if(whosMove == 0){     
                tickMatrix.push('2'); 
                console.log(tickMatrix);
                whosMove = 1; 
	console.log("whois 0 " + computerSelection) 
             } else if(whosMove == 1) {
                 tickMatrix.push('2')
                 console.log(tickMatrix);
                 whosMove = 0;
             }
            break;//end of case 2     
      case '3':
             console.log("value of whosMoveL: " + whosMove);
             console.log("value of userSelection in the Game: " + userSelection)      
             if(whosMove == 0){     
                tickMatrix.push('3'); 
                console.log(tickMatrix);
                whosMove = 1; 
	console.log("whois 0 " + computerSelection) 
             } else if(whosMove == 1) {
                 tickMatrix.push('3')
                 console.log(tickMatrix);
                 whosMove = 0;
             }
            break;//end of case 3
              case '4':
             console.log("value of whosMoveL: " + whosMove);
             console.log("value of userSelection in the Game: " + userSelection)      
             if(whosMove == 0){     
                tickMatrix.push('4'); 
                console.log(tickMatrix);
                whosMove = 1; 
	console.log("whois 0 " + computerSelection) 
             } else if(whosMove == 1) {
                 tickMatrix.push('4')
                 console.log(tickMatrix);
                 whosMove = 0;
             }
            break;//end of case 4
              case '5':
             console.log("value of whosMoveL: " + whosMove);
             console.log("value of userSelection in the Game: " + userSelection)      
             if(whosMove == 0){     
                tickMatrix.push('5'); 
                console.log(tickMatrix);
                whosMove = 1; 
	console.log("whois 0 " + computerSelection) 
             } else if(whosMove == 1) {
                 tickMatrix.push('5')
                 console.log(tickMatrix);
                 whosMove = 0;
             }
            break;//end of case 5
              case '6':
             console.log("value of whosMoveL: " + whosMove);
             console.log("value of userSelection in the Game: " + userSelection)      
             if(whosMove == 0){     
                tickMatrix.push('6'); 
                console.log(tickMatrix);
                whosMove = 1; 
	console.log("whois 0 " + computerSelection) 
             } else if(whosMove == 1) {
                 tickMatrix.push('6')
                 console.log(tickMatrix);
                 whosMove = 0;
             }
            break;//end of case 6            
               case '7':
             console.log("value of whosMoveL: " + whosMove);
             console.log("value of userSelection in the Game: " + userSelection)      
             if(whosMove == 0){     
                tickMatrix.push('7'); 
                console.log(tickMatrix);
                whosMove = 1; 
	console.log("whois 0 " + computerSelection) 
             } else if(whosMove == 1) {
                 tickMatrix.push('7')
                 console.log(tickMatrix);
                 whosMove = 0;
             }
            break;//end of case 7            
               case '8':
             console.log("value of whosMoveL: " + whosMove);
             console.log("value of userSelection in the Game: " + userSelection)      
             if(whosMove == 0){     
                tickMatrix.push('8'); 
                console.log(tickMatrix);
                whosMove = 1; 
	console.log("whois 0 " + computerSelection) 
             } else if(whosMove == 1) {
                 tickMatrix.push('8')
                 console.log(tickMatrix);
                 whosMove = 0;
             }
            break;//end of case 8            
                 case '9':
             console.log("value of whosMoveL: " + whosMove);
             console.log("value of userSelection in the Game: " + userSelection)      
             if(whosMove == 0){     
                tickMatrix.push('5'); 
                console.log(tickMatrix);
                whosMove = 1; 
	console.log("whois 0 " + computerSelection) 
             } else if(whosMove == 1) {
                 tickMatrix.push('9')
                 console.log(tickMatrix);
                 whosMove = 0;
             }
            break;//end of case 9                   
             
                 }//end of switch statement
}*///end of the gamefunction
    

function computerLogic(){
    
    
    
    
    
}    
    
    

})//document ready




