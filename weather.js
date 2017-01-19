
navigator.geolocation.getCurrentPosition(function(position) {
    
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    console.log(lat);
    console.log(long);
    
      $(document).ready(function() {
      $.ajax({
        type: 'GET',
        url: 'https://api.openweathermap.org/data/2.5/weather',
        data: {lat:lat,
               lon:long,
               appid:'c163954ce735926f7d6eea7476f5c959'},
        crossDomain:true, 
        dataType: 'json',

        success:function(data){
            var array = data;
            console.log(array);
            var farh = Math.ceil(((data.main.temp)*(9/5))-459.67);
            var updateFarh = farh + String.fromCharCode(176) + "F";
            var cal = Math.ceil(data.main.temp - 273.15);
            var updateCal = cal + String.fromCharCode(176) + "C";
            $("#temp").text(updateFarh);
            $("#loc").text(data.name);
            
            
            $("#change").on("click", function(){
                var el = $("#temp").text();
                 if(el === updateFarh){
                    $("#temp").text(updateCal);
                    $('#change').text("Change to Fahrenheit"); 
                    
                } else if (el === updateCal) {
                    $("#temp").text(updateFarh);
                    $('#change').text("Change to Celcius"); 
                } 
            });
            
    
      if(farh <= 40){
          document.body.background = "http://www.reduxloop.com/images/winter-wallpaper-12.jpg";
          
      }else if(farh >= 41 & farh <= 65){
          
          document.body.background = "http://www.reduxloop.com/images/fall.jpg";
          
      } else if (farh >=66 & farh >= 75){
      
          document.body.background = "http://www.reduxloop.com/images/spring.jpg";
          
      }else{
      
          document.body.background = "http://www.reduxloop.com/images/summer.jpg";
         }
        },
            error: function(err) {
            var data = $.parseJSON(err.responseText);
            showErrorModal(data.errorMessage);
        }
   });

      });  
    
});


