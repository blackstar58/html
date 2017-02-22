
var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas","brunofin","comster404"]

var clientID = "sbp1wnku2j32dtnjj4qefhslopxq8s";

var feedReturn = [];


channels.forEach(function(element){
    
    console.log(element)
    $.getJSON("https://api.twitch.tv/kraken/streams/"+element+"?client_id=sbp1wnku2j32dtnjj4qefhslopxq8s",function(data){
      
        if(data.stream === null){
            
           feedReturn.push(["Offline",data._links.channel,element]); 
    
        } else if (data.stream === undefined) {
        feedReturn.push(["Account Closed",element]); 
        
        }else {            
            feedReturn.push(["Online",data._links.channel,element]);
            
        }

     })  
})

function buildHtmlTable() {
     var columns = addAllColumnHeaders(feedReturn);
 
     for (var i = 0 ; i < myList.length ; i++) {
         var row$ = $('<tr/>');
         for (var colIndex = 0 ; colIndex < columns.length ; colIndex++) {
             var cellValue = myList[i][columns[colIndex]];
 
             if (cellValue == null) { cellValue = ""; }
 
             row$.append($('<td/>').html(cellValue));
         }
         $("#excelDataTable").append(row$);
     }
 }

 function addAllColumnHeaders(feedReturn)
 {
     var columnSet = [];
     var headerTr$ = $('<tr/>');
 
     for (var i = 0 ; i < myList.length ; i++) {
         var rowHash = myList[i];
         for (var key in rowHash) {
             if ($.inArray(key, columnSet) == -1){
                 columnSet.push(key);
                 headerTr$.append($('<th/>').html(key));
             }
         }
     }
     $("#excelDataTable").append(headerTr$);
 
     return columnSet;
 }
    
    console.log(feedReturn);

 $(document).ready(function() {     


})
    

    