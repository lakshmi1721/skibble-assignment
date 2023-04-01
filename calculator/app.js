let Num1 = document.getElementById("Num1");
let Num2 = document.getElementById("Num2");
let Result = document.getElementById("Result");

function addby() {
  Result.value = parseInt(Num1.value) + parseInt(Num2.value);
}

function subtractby() {
  Result.value = parseInt(Num1.value) - parseInt(Num2.value);
}

function multiplyby() {
  Result.value = parseInt(Num1.value) * parseInt(Num2.value);
}

function divideby() {
  Result.value = parseInt(Num1.value) / parseInt(Num2.value);
}
