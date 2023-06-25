// Function to handle the responsive behavior of the navigation menu.
// to toggle the visibility of the navigation menu when a user clicks on a button or icon.

//this works with three different functions.
function myMenuFunction() {
  var i = document.getElementById("navMenu");
  // Check if the navigation menu has the class "nav-menu"
  if (i.className === "nav-menu") {
    // If it does, add the class "responsive" to make it responsive
    i.className += " responsive";
  } else {
    // Otherwise, remove the class "responsive" to make it non-responsive
    i.className = "nav-menu";
  }
}
//here we are just setting our variables
var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");
// Function to handle login form display
function login() {
  x.style.left = "4px";
  y.style.right = "-520px";
  a.className += " white-btn";
  b.className = "btn";
  x.style.opacity = 1;
  y.style.opacity = 0;
}
// Function to handle registration form display
function register() {
  x.style.left = "-510px";
  y.style.right = "5px";
  a.className = "btn";
  b.className += " white-btn";
  x.style.opacity = 0;
  y.style.opacity = 1;
}
