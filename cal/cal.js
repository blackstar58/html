var currentValue;
var totalValue;
var calcChain = [];



 $(document).ready(function() {     

 /*    document.getElementById('1').addEventListener("click",displayNum);
  //   document.getElementById('2').addEventListener("click",displayNum);
     document.getElementById('3').addEventListener("click",displayNum);
     document.getElementById('4').addEventListener("click",displayNum);
     document.getElementById('5').addEventListener("click",displayNum);
     document.getElementById('6').addEventListener("click",displayNum);
     document.getElementById('7').addEventListener("click",displayNum);
     document.getElementById('9').addEventListener("click",displayNum);
     document.getElementById('zero').addEventListener("click",displayNum);
     document.getElementById('multiply').addEventListener("click",displayNum);
     document.getElementById('division').addEventListener("click",displayNum);
     document.getElementById('minus').addEventListener("click",displayNum);
     document.getElementById('plus').addEventListener("click",displayNum);
     document.getElementById('equals').addEventListener("click",displayNum); */
     
     
     
   var theParent = document.querySelector("#theParent");
     console.log(theParent);
    
     
  for (var i = 0; i < theParent.children.length; i++) {
    var childElement = theParent.children[i];
      console.log(childElement);
    childElement.addEventListener('click', doSomething, false);
}
 
function doSomething(e) {
    
     console.log(e.toElement.id);
    
     panel.innerHTML = e.toElement.id;
    
    
    
    
   }   
     
})
    