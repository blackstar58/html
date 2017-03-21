var currentValue;
var totalValue;
var calcChain = [];



 $(document).ready(function() {     

     
     
   var theParent = document.querySelector("#theParent");
     console.log(theParent);
    
     
  for (var i = 0; i < theParent.children.length; i++) {
    var childElement = theParent.children[i];
      console.log(childElement);
    childElement.addEventListener('click', doSomething, false);
}
 
function doSomething(e) {
    
     console.log(e.toElement.id);
    
    var value = e.toElement.id;
     panel.innerHTML = e.toElement.id;
    
    switch(value){
        case '1':
            panel.innerHTML = '1';
            break;
        case '2':
            panel.innerHTML = '2';
            break;
        case '3':
            panel.innerHTML = '3';
            break;
        case '4':
            panel.innerHTML = '4';
            break;
        case '5':
            panel.innerHTML = '5';
            break;
        case '6':
            panel.innerHTML = '6';
            break;
        case '7':
            panel.innerHTML = '7';
            break;
        case '8':
            panel.innerHTML = '8';
            break;
        case '9':
            panel.innerHTML = '9';
            break;
        case '0':
            panel.innerHTML = '0';
            break;
        case 'divison':
            panel.innerHTML = '&bsol;';
            break;
        case 'multiply':
            panel.innerHTML = '&ast;';
            break;
        case 'plus':
            panel.innerHTML = '&plus;';
            break;
        case 'minus':
            panel.innerHTML= '&minus;'
            break;
        case 'equals':
            panel.innerHTML = '&equals;';
            break;
        case 'period':
            panel.innerHTML = '&period;';
            break;
        case 'AC':
            panel.innerHTML
        default:
            panel.innerHTML = '0';
            
        
            
            
            
            
            
    }
    
    
   }   
     
})
    