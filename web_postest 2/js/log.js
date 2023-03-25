function login() {
  var email = document.getElementById("email").value;
  var pass = document.getElementById("pass").value;

  var users = JSON.parse(localStorage.getItem("users")) || [];

  var loggedIn = false;
  for (var i = 0; i < users.length; i++) {
    if (email === users[i].email && pass === users[i].pass) {
      loggedIn = true;
      alert("Login successful!SILAHKAN BOOKING");
      window.open("data.html");

      break;
    }
  }

  if (!loggedIn) {
    alert("Invalid username or password.");
  }
}
