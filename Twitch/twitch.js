
var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","brunofin","comster404"]

var clientID = "sbp1wnku2j32dtnjj4qefhslopxq8s";

var feedReturn = [];
var table ;
var row;
var cell1;
var cell2;
var cell3;

channels.forEach(function(element){
    
    
    $.getJSON("https://api.twitch.tv/kraken/streams/"+element+"?client_id=sbp1wnku2j32dtnjj4qefhslopxq8s",function(data){
    

        if(data.stream === null){
            
           feedReturn.push(["Offline",data._links.channel,element]); 
            table = document.getElementById("dataTable")
            row = table.insertRow(1);
            cell1 = row.insertCell(0);
            cell2 = row.insertCell(1);
            cell3 = row.insertCell(2);
            cell1.innerHTML = "Offline";
            cell2.innerHTML = element; 
            cell3.innerHTML = data._links.channel;
            
    
        } else if (data.stream === undefined) {
        feedReturn.push(["Account Closed",element]);
            table = document.getElementById("dataTable")
            row = table.insertRow(1);
            cell1 = row.insertCell(0);
            cell2 = row.insertCell(1);
            cell3 = row.insertCell(2);
            cell1.innerHTML = "Account Closed";
            cell2.innerHTML = element; 
            cell3.innerHTML = data._links.channel;
        
        }else {            
            feedReturn.push(["Online",data._links.channel,element]);
            table = document.getElementById("dataTable")
            row = table.insertRow(1);
            cell1 = row.insertCell(0);
            cell2 = row.insertCell(1);
            cell3 = row.insertCell(2);
            cell1.innerHTML 
            var img = document.createElement('img');
            img.src = data.stream.channel.logo;
            cell1.appendChild(img)
            img.height = 75;
            img.width = 75;
            cell2.innerHTML = element;
            cell2.innerHTML=  '<a href="'+data.stream.channel.url+'">'+element+'</a>';
            cell3.innerHTML = data.stream.channel.url;
            
        }

     })  
})


    
    console.log(feedReturn);

 $(document).ready(function() {     

   
     
     
     
})
    

    