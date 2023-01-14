const form = document.querySelector("#myForm");
const displayParagraph = document.querySelector("#display");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  const nameValue = document.querySelector("#name").value;
  localStorage.setItem("name", nameValue);
});

if(localStorage.getItem("name")){
  const nameValue = localStorage.getItem("name");
  displayParagraph.innerText = "Your name is " + nameValue;
}
