const submitEl = document.querySelector('#submit');
function submitButton(event) {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
}
submitEl.addEventListener('click', submitButton);