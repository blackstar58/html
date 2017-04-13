$(document).ready(function (){   
	
    var x = null;

function myCounter(countDownDate){
    clearInterval(x)
    x = setInterval(function() {
        
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)
    document.getElementById("demo").innerHTML = minutes + " m"  + " : "+ seconds + " s";
        
    if(distance < 0){
        clearInterval(x)
        //myCounter(countDownDate)
        console.log("Print Field")
    }    
        
}, 1000);
    
}
    
$("#plus").on("click",function(){
    timelimit = parseInt(document.getElementById("value").innerHTML)
    timelimit = timelimit + 1
    document.getElementById("value").innerHTML = timelimit; 
})
    $("#minus").on("click",function(){  
    timelimit = parseInt(document.getElementById("value").innerHTML)
    timelimit = timelimit - 1
    document.getElementById("value").innerHTML = timelimit; 
})
  $("#long").on("click",function(){
      timelimit = 15
	  pomMin = new Date().getTime() 
	  countDownDate = pomMin + (timelimit * 1000 * 60) 
      myCounter(countDownDate);


	   }    
)
  
  $("#short").on("click",function(){
       timelimit = 5
	  pomMin = new Date().getTime() 
	  countDownDate = pomMin + (timelimit * 1000 * 60)	  
      myCounter(countDownDate);
	   }   
)	
	

  $("#restart").on("click",function(){
      timelimit = parseInt(document.getElementById("value").innerHTML)
	 pomMin = new Date().getTime() 
	countDownDate = pomMin + (timelimit * 1000 * 60)
          
    if(document.getElementById("restart").innerHTML == "Start"){
        
        document.getElementById("restart").innerHTML = "Restart"   
        
    } else {
        
        document.getElementById("restart").innerHTML = "Start"
  
    }
      myCounter(countDownDate);
	   }       
)	//end of restart function
    //end of script
	   }   
     
)
