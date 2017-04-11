$(document).ready(function (){   
	

var timelimit = 35
var pomMin = new Date().getTime() 
var countDownDate = pomMin + (timelimit * 1000 * 60)

$("#plus").on("click",function(){  
    
    timelimit = timelimit + 1
    console.log(timelimit)
    document.getElementById("value").innerHTML = timelimit; 
})

    $("#minus").on("click",function(){  

    timelimit = timelimit - 1
    console.log(timelimit)
    document.getElementById("value").innerHTML = timelimit; 
})



  $("#long").on("click",function(){
       timelimit = 15
	  console.log(timelimit)
	  pomMin = new Date().getTime() 
	  countDownDate = pomMin + (timelimit * 1000 * 60)

      
var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = minutes + " m"  + " : "+ seconds + " s";
    
    // If the count down is over, write some text 
    if (distance < 0) {

        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
	   }   
     
)
  
	  
  $("#short").on("click",function(){
       timelimit = 5
	  console.log(timelimit)
	  pomMin = new Date().getTime() 
	  countDownDate = pomMin + (timelimit * 1000 * 60)
	  
var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = minutes + " m"  + " : "+ seconds + " s";
    
    // If the count down is over, write some text 
    if (distance < 0) {
	
	    
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
	   }   
     
)	
	

  $("#restart").on("click",function(){
      timelimit = parseInt(document.getElementById("value").innerHTML)
	  console.log(timelimit)
	  pomMin = new Date().getTime() 
	  countDownDate = pomMin + (timelimit * 1000 * 60)

          
    if(document.getElementById("restart").innerHTML == "Start"){
        document.getElementById("restart").innerHTML = "Restart"
        
        
    } else {
        
         document.getElementById("restart").innerHTML = "Start"

    }
      
var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = minutes + " m"  + " : "+ seconds + " s";
    
    if(distance < 0){
        
        console.log(timelimit)
        x = setInterval(loop,1000);
        
    }

}, 1000);
      
	   }   
     
)	
    
    //end of script
	   }   
     
)
