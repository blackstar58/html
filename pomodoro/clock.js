$(document).ready(function (){   
	
    var x = null;
    var audioElement = document.createElement('audio');
    var status = null;
    audioElement.setAttribute('src','http://reduxloop.com/sound/ding.mp3')

function myCounter(countDownDate,status){
    clearInterval(x)
    x = setInterval(function() {        
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)
    document.getElementById("demo").innerHTML = minutes + " m"  + " : "+ seconds + " s";
        
    if(distance <= 0 & status == "start"){
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Break Time"
        audioElement.play();
        
        status = "long"
        timelimit = 5;
        pomMin = new Date().getTime() 
	    countDownDate = pomMin + (timelimit * 1000 * 60) 
        
        myCounter(countDownDate,status)
    } else if(distance <=0 & status == "long") {
        clearInterval(x);
        audioElement.play();
        status = "start"
        timelimit = parseInt(document.getElementById("value").innerHTML)
        pomMin = new Date().getTime() 
	    countDownDate = pomMin + (timelimit * 1000 * 60) 
        myCounter(countDownDate,status)
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
        
        if(timelimit == 1){
            document.getElementById("value").innerHTML = timelimit;       
        } else {
            timelimit = timelimit - 1
    document.getElementById("value").innerHTML = timelimit;  
        }
    
})
  $("#long").on("click",function(){
      timelimit = 5
	  pomMin = new Date().getTime() 
	  countDownDate = pomMin + (timelimit * 1000 * 60) 
      status = "long"
      myCounter(countDownDate,status);
	   }    
)
  	

  $("#restart").on("click",function(){
      timelimit = parseInt(document.getElementById("value").innerHTML)
	 pomMin = new Date().getTime() 
	countDownDate = pomMin + (timelimit * 1000 * 60)
    status = "start";  
          
    if(document.getElementById("restart").innerHTML == "Start"){
        
        document.getElementById("restart").innerHTML = "Restart"   
        
    } else {
        
        document.getElementById("restart").innerHTML = "Start"
  
    }
      myCounter(countDownDate,status);
	   }       
)	//end of restart function
    //end of script
	   }   
     
)
