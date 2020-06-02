
$( "#mathCalc" ).submit(function( event ) {
var m1 = document.getElementById('mass1').value *9800;
var m2 = document.getElementById('mass2').value*9800;
var m3 = document.getElementById('mass3').value*9800;
var m4 = document.getElementById('mass4').value*9800;
var d1 = document.getElementById('distance1').value*39.3701;
var d2 = document.getElementById('distance2').value*39.3701;
var d3 = document.getElementById('distance3').value*39.3701;
var initialCalc = ((m1*d1)+(m2*d2)+(m3*d3))/m4
var convertedForm = (initialCalc*-.0254).toFixed(2);
    document.getElementById("h1").innerHTML = convertedForm+" inches from center";
    event.preventDefault();
  });
