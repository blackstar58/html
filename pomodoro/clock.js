$(document).ready(function (){   
	
var longBreak = 15
var shortBreak = 5


// Set the date we're counting down to
//var countDownDate = new Date("Jan 5, 2018 15:37:25").getTime();

var pomMin = new Date().getTime() 
var countDownDate = pomMin + (25 * 1000 * 60)

console.log(countDownDate)

	
var x = setInterval(function() {

    var now = new Date().getTime();
    var distance = countDownDate - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = minutes + " : "+ seconds;
    
    // If the count down is over, write some text 
    if (distance < 0) {
	
	    
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
	   }   
     
)
