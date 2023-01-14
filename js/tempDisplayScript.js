if(localStorage.getItem("uname") != null){
    console.log("if entered");
    document.querySelector("#username").innerText = localStorage.getItem("uname");
    document.querySelector("#fullname").innerText = localStorage.getItem("fullname");
    document.querySelector("#bioPanel").innerText = localStorage.getItem("bio-text");
    document.querySelector("#address").innerText = localStorage.getItem("address");
    document.querySelector("#zip-code").innerText = localStorage.getItem("zip-code");
    document.querySelector("#country").innerText = localStorage.getItem("country");
    document.querySelector("#sex").innerText = localStorage.getItem("sex");
    document.querySelector("#language").innerText = localStorage.getItem("language");
  }