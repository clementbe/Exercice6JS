function modulo(){
 var text1 = document.getElementById("premier_nombre").value;
 var text2 = document.getElementById("deuxieme_nombre").value;
 var number1 = parseInt(text1);
 var number2 = parseFloat(text2);
 var number3 = number1 % number2;
 alert(number3);
}
