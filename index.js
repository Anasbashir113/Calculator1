function showme(number) {
  var result = document.getElementById("result");
  result.value += number;
}
// function calculation() {
//   var calculation = document.getElementById("result").value;
//   var evall = eval(calculation);
//   document.getElementById("result").value = evall;
// }

function calculation() {
  var calculation = document.getElementById("result").value;
  var evall = eval(calculation);
  document.getElementById("result").value = evall;
}
function clar() {
  document.getElementById("result").value = " ";
}
