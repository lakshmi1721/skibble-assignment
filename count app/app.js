let res = document.getElementsByClassName("block2");
let value = 1;

function increase() {
  let presentValue = parseInt(res[0].innerHTML);
  res[0].innerHTML = value + presentValue;
}

function decrease() {
  let PresentValue = parseInt(res[0].innerHTML);
  res[0].innerHTML = PresentValue - value;
}
function reset() {
  res[0].innerHTML = 0;
}
