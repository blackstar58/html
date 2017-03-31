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
            currentValue = checkNull(currentValue, '1');
            console.log(currentValue);
            console.log(calcChain);
             panel.innerHTML = currentValue;
            break;
        case '2':
            
            currentValue = checkNull(currentValue, '2');
            console.log(calcChain);
            console.log(currentValue);
            panel.innerHTML = currentValue;
            break;
        case '3':
            currentValue = checkNull(currentValue, '3');
            panel.innerHTML = currentValue;
            console.log(calcChain);
            break;
        case '4':
            currentValue = checkNull(currentValue, '4');
            panel.innerHTML = currentValue;
            console.log(currentValue);
            console.log(calcChain);
            break;
        case '5':
            currentValue = checkNull(currentValue, '5');
            panel.innerHTML = currentValue;
            console.log(currentValue);
            console.log(calcChain);
            break;
        case '6':
            currentValue = checkNull(currentValue, '6');
            panel.innerHTML = currentValue;
            console.log(currentValue);
            console.log(calcChain);
            break;
        case '7':
            currentValue = checkNull(currentValue, '7');
            panel.innerHTML = currentValue;
            console.log(currentValue);
            console.log(calcChain);
            break;
        case '8':
            currentValue = checkNull(currentValue, '8');
            panel.innerHTML = currentValue;
            console.log(currentValue);
            console.log(calcChain);
            break;
        case '9':
            currentValue = checkNull(currentValue, '9');
            panel.innerHTML = currentValue;
            
            console.log(currentValue);
            console.log(calcChain);
            break;
        case 'zero':
            
            currentValue = checkNull(currentValue, '0');
            panel.innerHTML = currentValue;
            
            console.log(currentValue);
            console.log(calcChain);
            break;
        case 'divison':
             if(currentValue == null){
                panel.innerHTML = '0';
            } else{
            calcChain.push(currentValue);
            calcChain.push('/');   
             panel.innerHTML = '0';
                currentValue = null; 
            console.log(calcChain);  
            break;
            }
        case 'multiply':
            
            if(currentValue == null){
                panel.innerHTML = '0';
            } else{
            calcChain.push(currentValue);
            calcChain.push('*');
            panel.innerHTML = '0';
            currentValue = null;
            console.log(calcChain);
            break;    
            }

        case 'plus':
            if(currentValue == null){
                panel.innerHTML = '0';
            } else{
            calcChain.push(currentValue);    
            panel.innerHTML = '0';
            currentValue = null;
            calcChain.push('+');
            console.log(calcChain);
            break;
            }
        case 'minus':
            if(currentValue == null){
                panel.innerHTML = '0';
            } else{
            calcChain.push(currentValue);
            panel.innerHTML= '0';
            calcChain.push('-');
            currentValue = null;    
            console.log(calcChain);
            break;
            }
        case 'equals':
            if(currentValue == null){
                panel.innerHTML = '0';
            } else {
                calcChain.push(currentValue); 
                console.log(calcChain);
                var finalresult = calEngine(calcChain);
                panel.innerHTML = finalresult;
                calcChain = [];
                currentValue = null;
               break; 
            }
        case 'plusmn':
            if(currentValue == null){
                panel.innerHTML = '0';
            } else {
                currentValue = currentValue * -1;
                console.log(currentValue);
                panel.innerHTML = currentValue;
                break;
            } 
            
        
        
        
        case 'period':
            
            if(currentValue == null || currentValue.indexOf('.') == -1){
                currentValue = '0';
                currentValue = checkNull(currentValue,'.');    
            } else {
                panel.innerHTML = currentValue;
            }
                panel.innerHTML = currentValue;
            console.log(currentValue);
            console.log(calcChain);
            break;
        case 'AC':
            calcChain = [];
            currentValue = null;
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
            
         if (currentValue == '0'){
                
                currentValue = value;
                return currentValue;
                
            } else {
                
                return currentValue += value;
            }
               
            }
            
        }//end of checkNull Function
    
    function calEngine(arr){
        var total = 0;
       
        for(var j =0;j < arr.length;j++){
            if(j == 0){
                
                var t = parseFloat(arr[j]);
                       total += t; 
                console.log(total);
            } else {
                
                var action = null;
                if(arr[j] == '+'){

                    action = parseFloat(arr[j + 1]);
                    console.log("value of s: " + action);
                    total += action;  
                    console.log("value of total in add: " + total);
                    j++;
                } else if (arr[j] == '-'){
                    
                    action = parseFloat(arr[j + 1]);
                    console.log("value of m in mimus: " + action);
                    total = total - action;
                    console.log("value of total in minus: " + total);
                    j++
                    
                }  else if (arr[j] == '*'){
                    action = parseFloat(arr[j + 1]);
                    console.log("value of n in multiply: " + action);
                    total = total * action;
                    console.log("value of total in multiply: " + total);
                    j++;
                } else if (arr[j] == '/'){
    
                    action = parseFloat(arr[j + 1]);
                    console.log("value of n in divide: " + action);
                    total = total / action;
                    console.log("value of total in divide: " + total);
                    j++;
                    
                }
            }
            
        }//End of cal Engine
       return total;
        
    }
    
    }
    

    
   }   
     
)
    