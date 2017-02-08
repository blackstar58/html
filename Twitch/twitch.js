    
var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","brunofin","comster404"]

var clientID = "sbp1wnku2j32dtnjj4qefhslopxq8s";

$(document).ready(function() {
    
 $.getJSON("https://api.twitch.tv/kraken/streams/ESL_SC2?client_id=sbp1wnku2j32dtnjj4qefhslopxq8s",function(data){

console.log(data); 
console.log(data.stream);     
console.log(data._links);
console.log(data.stream.game);     
document.getElementById("Title").textContent = data.stream.game;     
     })  
})

    
    