
navigator.geolocation.getCurrentPosition(function(position) {
    
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    console.log(lat);
    console.log(long);
    
      $(document).ready(function() {
      $.ajax({
        type: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather',
        data: {lat:lat,
               lon:long,
               appid:'c163954ce735926f7d6eea7476f5c959'},
        crossDomain:true, 
        dataType: 'json',

        success:function(data){
            var array = data;
            console.log(array);
            var farh = Math.ceil(((data.main.temp)*(9/5))-459.67);
            var cal = Math.ceil(data.main.temp - 273.15);
            console.log(cal);
            console.log(farh);
            $("#temp").text(farh);
            $("#loc").text(data.name);
            
            farh = 32;
      if(farh <= 40){
          document.body.background = "http://www.reduxloop.com/images/winter-wallpaper-12.jpg";
          document.getElementById('temp').style.color = "red";
          document.getElementById('loc').style.color = "red";
          
      }else if(farh >= 41 & farh <= 65){
          document.body.background = "http://www.reduxloop.com/images/fall.jpg";
          document.getElementById('temp').style.color = "white";
          document.getElementById('loc').style.color = "white";
          
      } else if (farh >=66 & farh >= 75){
          document.body.background = "http://www.reduxloop.com/images/spring.jpg";
          document.getElementById('temp').style.color = "white";
          document.getElementById('loc').style.color = "white";
          
      }else{
         document.body.background = "http://www.reduxloop.com/images/summer.jpg";
          document.getElementById('temp').style.color = "white";
          document.getElementById('loc').style.color = "white";
          
          
      }
            
           
        },
            error: function(err) {
            var data = $.parseJSON(err.responseText);
            showErrorModal(data.errorMessage);
        }
   });

      });  
    
});


