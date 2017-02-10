    
var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","brunofin","comster404"]

var clientID = "sbp1wnku2j32dtnjj4qefhslopxq8s";
var allChannels = [];
var feedReturn = [];

$(document).ready(function() {
    
    
   

for (var i = 0;i < channels.length; i++){

    allChannels[i] = new Array(3);
     allChannels[i][0] = channels[i]
     
     
    console.log(channels[i]);
    
$.getJSON("https://api.twitch.tv/kraken/streams/"+channels[i]+"?client_id=sbp1wnku2j32dtnjj4qefhslopxq8s",function(data){

    $.each(data,function(i){

        console.log(channels[i]);
        feedReturn.push(data[i]);
        feedReturn.i.push("No Stream");
        
        
    })
    
    console.log(data); 
if (data.stream == null){
  
    console.log("No Stream");

} else {
    
    console.log("Steam Available");

}       
   
     })  


}    
        console.log(allChannels);
        console.log(feedReturn);
})

    
    