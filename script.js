function openLogin() {
  document.getElementById("loginBox").style.display = "block";
}

function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "admin" && pass === "admin123") {
    alert("Admin Login Successful");
  } else {
    alert("User Login Successful");
  }
}
