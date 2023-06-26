function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if (i.className === "nav-menu") {
      i.className += " responsive";
    } else {
      i.className = "nav-menu";
    }
  }
  
  var a = document.getElementById("loginBtn");
  var b = document.getElementById("registerBtn");
  var x = document.getElementById("login");
  var y = document.getElementById("register");
  function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
  }
  function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
  }

  

function ResetPassword() {
  const newPasswordInput = document.getElementById('Password');
  const confirmInput = document.getElementById('ConfirmPassword');
  const emailInput = document.getElementById('email');
  
  const email = emailInput.value;
  const newpassword = newPasswordInput.value;
  const confirmpassword = confirmInput.value;

  
fetch('/HopeHacks1', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({email, newpassword, confirmpassword})
})
.then(response => {
  return response.json();
})
.then(data => {
  console.log('Response data:', data);
  alert('Account Successfully Created!');
  
})
.catch(error => {
  console.error(error);
  alert('Registration Failed');
});
}









