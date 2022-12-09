 function add(){
     let num1 = parseFloat(document.getElementById("num1").value);
     let num2 = parseFloat(document.getElementById("num2").value);
     let result = num1 + num2
     document.getElementById("Result").innerHTML = num1 +" + " +num2 +" = " +result;
    }

 function sub(){
     let num1 = parseFloat(document.getElementById("num1").value);
     let num2 = parseFloat(document.getElementById("num2").value);
     let result = num1 - num2
     document.getElementById("Result").innerHTML = num1 +" - " +num2 +" = " +result;
 }

 function multip(){
     let num1 = parseFloat(document.getElementById("num1").value);
     let num2 = parseFloat(document.getElementById("num2").value);
     let result = num1 * num2
     document.getElementById("Result").innerHTML = num1 +" x " +num2 +" = " +result;
 }

 function div(){
     let num1 = parseFloat(document.getElementById("num1").value);
     let num2 = parseFloat(document.getElementById("num2").value);
     let result = num1 / num2
     document.getElementById("Result").innerHTML = num1 +" / " +num2 +" = " +result;
 }

