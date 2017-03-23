var currentValue = null;
var totalValue;
var calcChain = [];
var temp;

$(document).ready(function (){      

    var theParent = document.querySelector("#theParent");
   
    for (var i = 0; i < theParent.children.length; i++) {
    var childElement = theParent.children[i];
      
    childElement.addEventListener('click', doSomething, false);
}
 
function doSomething(e) {
    
    
    
    var value = e.toElement.id;
     panel.innerHTML = e.toElement.id;
    
    switch(value){
        case '1':
           
            calcChain.push('1');
            currentValue = checkNull(currentValue,'1');
            console.log(currentValue);
            console.log(calcChain);
             panel.innerHTML = currentValue;
            break;
        case '2':
            calcChain.push('2');
            currentValue = checkNull(currentValue,'2');
            console.log(calcChain);
            console.log(currentValue);
            panel.innerHTML = currentValue;
            break;
        case '3':
           
         
            calcChain.push('3');
            currentValue = checkNull(currentValue,'3');
            panel.innerHTML = currentValue;
            console.log(calcChain);
            break;
        case '4':
           
            currentValue = checkNull(currentValue,'4');
            panel.innerHTML = currentValue;
            calcChain.push('4');
            console.log(currentValue);
            console.log(calcChain);
            break;
        case '5':
           
            currentValue = checkNull(currentValue,'5');
            panel.innerHTML = currentValue;
            calcChain.push('5');
            console.log(currentValue);
            console.log(calcChain);
            break;
        case '6':
            currentValue = checkNull(currentValue,'6');
            panel.innerHTML = currentValue;
            calcChain.push('6');
            console.log(currentValue);
            console.log(calcChain);
            break;
        case '7':
            currentValue = checkNull(currentValue,'7');
            panel.innerHTML = currentValue;
            calcChain.push('7');
            console.log(currentValue);
            console.log(calcChain);
            break;
        case '8':
            currentValue = checkNull(currentValue,'8');
            panel.innerHTML = currentValue;
            calcChain.push('8');
            console.log(currentValue);
            console.log(calcChain);
            break;
        case '9':
            currentValue = checkNull(currentValue,'9');
            panel.innerHTML = currentValue;
            calcChain.push('9');
            console.log(currentValue);
            console.log(calcChain);
            break;
        case 'zero':
            
            currentValue = checkNull(currentValue,'0');
            panel.innerHTML = currentValue;
            calcChain.push('0');
            console.log(currentValue);
            console.log(calcChain);
            break;
        case 'divison':
            panel.innerHTML = '&bsol;';
            calcChain.push('/');
            console.log(calcChain);
            break;
        case 'multiply':
            panel.innerHTML = '&ast;';
            calcChain.push('*');
            console.log(calcChain);
            break;
        case 'plus':
            panel.innerHTML = '&plus;';
            calcChain.push('+');
            console.log(calcChain);
            break;
        case 'minus':
            panel.innerHTML= '&minus;'
            calcChain.push('-');
            console.log(calcChain);
            break;
        case 'equals':
            panel.innerHTML = '&equals;';
            calcChain.push('=');
            console.log(calcChain);
            break;
        case 'period':
            
            if(currentValue.indexOf('.') == -1){
                currentValue = checkNull(currentValue,'.');    
            } else {
                panel.innerHTML = currentValue;
            }
            
            panel.innerHTML = currentValue;
            console.log(currentValue);
            calcChain.push('.');
            console.log(calcChain);
            break;
        case 'AC':
            calcChain = [];
            console.log(calcChain);
            panel.innerHTML = '0';
            break;
        case 'CE':
            currentValue = null;
            console.log(currentValue);
            console.log(calcChain);
            panel.innerHTML = '0';
            break;
        default:
            panel.innerHTML = '0';
            
      
    }
        function checkNull(currentValue,value){
        if (currentValue == null){
            return currentValue = value;
        } else {
                return currentValue += value;
            }
            
        }
    }
    

    
   }   
     
)
    