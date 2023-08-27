function loginFunction() {
  let usernameInput = document.getElementById("usernameInput").value;
  let passwordInput = document.getElementById("userPassword").value;
  if(usernameInput == "user1" && passwordInput == "user1") {
    window.location.href = "home.html";
  } else if(usernameInput != "user1") {
    alert("Please check entered username.");
  } else if(passwordInput != "user1") {
    alert("Please check entered password");
  }   
}