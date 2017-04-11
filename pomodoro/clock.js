$(document).ready(function (){   
	
var longBreak = 15
var shortBreak = 5
var timelimit = 35
var pomMin = new Date().getTime() 
var countDownDate = pomMin + (timelimit * 1000 * 60)
document.getElementById("demo").innerHTML = "35m : 00s"

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
       timelimit = 35
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
	  
// Set the date we're counting down to
//var countDownDate = new Date("Jan 5, 2018 15:37:25").getTime();

	   }   
     
)
