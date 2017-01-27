$(document).ready(function(){
  $("#myDIV").hide();

    
    
$("#search").on("click",function(){     
    var searchQuery = document.getElementById("searchbox").value;
    console.log(searchQuery);    
        var title = [];
        var links = [];
        var description = [];   
    $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&generator=search&search="+searchQuery+"&format=json&origin=*&gsrprop=snippet&prop=info&inprop=url",function(data){
        console.log(data);
        console.log(data[1][0]);
        console.log(data[1].length)

        for (var i = 0;i < data[1].length;i++){
            
           title.push(data[1][i]);
           description.push(data[2][i]);
           links.push(data[3][i]);
        var table = document.getElementById("myTable");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);        
        cell1.innerHTML = data[1][i];
        cell2.innerHTML = data[2][i];
        //ll2.interHTML("href",data[3][i]);
        cell3.innerHTML = data[3][i];        

            
        }
     })
        
    
        console.log(title);
        console.log(links);
        console.log(description);
           
    
     } )})