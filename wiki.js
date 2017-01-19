$(document).ready(function(){
    
    $("#search").on("click",function(){     
    var searchQuery = document.getElementById("searchbox").value;
    console.log(searchQuery);    
    
    
$.ajax({
    type: 'GET',
        url: ''
    
    
    
    
    
    
})
        
        
    })
})





/*$.ajax( {
    type: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        data: {lat:lat,
               lon:long,
               appid:'c163954ce735926f7d6eea7476f5c959'},
        crossDomain:true, 
        dataType: 'json',
    
    
    url: remoteUrlWithOrigin,
    data: queryData,
    dataType: 'json',
    type: 'POST',
    headers: { 'wikisearch-free-code': 'wikipedia/1.0' },
    success: function(data) {
       
  // https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=car&format=json&gsrprop=snippet&prop=info&inprop=url     
        
        
   // }
} ); */

