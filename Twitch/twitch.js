    
var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","brunofin","comster404"]

var clientID = "sbp1wnku2j32dtnjj4qefhslopxq8s";

$(document).ready(function() {

for (var i = 0;i < channels.length; i++){
    
    //console.log(channels[i]);
var lowVariable = channels[i];
    console.log(channels[i]);
    
$.getJSON("https://api.twitch.tv/kraken/streams/"+channels[i]+"?client_id=sbp1wnku2j32dtnjj4qefhslopxq8s",function(data){
console.log(data); 
if (data.stream == null){
    console.log("No Stream");
    console.log(data.stream);
    console.log(data._links.channel);
} else {
    console.log("Steam Available");
    console.log(data.stream);
    console.log(data._links.channel);
}       
   
     })  
    
}    
    
})

    
    