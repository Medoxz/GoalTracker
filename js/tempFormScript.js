console.log("script loaded");



const form = document.querySelector("#registerForm");


form.addEventListener("submit", function(event) {
  event.preventDefault();
  localStorage.setItem("uname", document.querySelector("#uname").value);
  localStorage.setItem("password", document.querySelector("#password").value);
  localStorage.setItem("fullname", document.querySelector("#fullname").value);
  localStorage.setItem("sex", document.querySelector("#sex-select").options[document.querySelector("#sex-select").selectedIndex].text);
  localStorage.setItem("language", document.querySelector("#language").options[document.querySelector("#language").selectedIndex].text);
  localStorage.setItem("address", document.querySelector("#address").value);
  localStorage.setItem("zip-code", document.querySelector("#zip-code").value);
  localStorage.setItem("country", document.querySelector("#country").options[document.querySelector("#country").selectedIndex].text);
  localStorage.setItem("email", document.querySelector("#email").value);
  localStorage.setItem("bio-text", document.querySelector("#personal-bio").value);
  window.location.href = "account.html";
});



