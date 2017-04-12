$(document).ready(function (){   
	

function myCounter(timelimit){
    
    var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)
    document.getElementById("demo").innerHTML = minutes + " m"  + " : "+ seconds + " s";
}, 1000);
}
    
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
            myCounter(timelimit);

	   }    
)
  
  $("#short").on("click",function(){
       timelimit = 5
	  console.log(timelimit)
	  pomMin = new Date().getTime() 
	  countDownDate = pomMin + (timelimit * 1000 * 60)	  
      myCounter(timelimit);
	   }   
)	
	

  $("#restart").on("click",function(){
      timelimit = parseInt(document.getElementById("value").innerHTML)
	  console.log(timelimit)
	 pomMin = new Date().getTime() 
	countDownDate = pomMin + (timelimit * 1000 * 60)
          
    if(document.getElementById("restart").innerHTML == "Start"){
        document.getElementById("restart").innerHTML = "Restart"   
        myCounter(timelimit);
    } else {
         document.getElementById("restart").innerHTML = "Start"
        myCounter(timelimit);
    }
	   }       
)	//end of restart function
    //end of script
	   }   
     
)
