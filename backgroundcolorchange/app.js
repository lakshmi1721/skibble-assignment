function selectColor(event) {
  document.getElementsByTagName("body")[0].style.backgroundColor =
    event?.target?.value;
}
