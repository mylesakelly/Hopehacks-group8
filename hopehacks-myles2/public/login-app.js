function myMenuFunction() {
    var i = document.getElementById("navMenu");
    if (i.className === "nav-menu") {
      i.className += " responsive";
    } else {
      i.className = "nav-menu";
    }
  }
  
  // var a = document.getElementById("loginBtn");
  // var b = document.getElementById("registerBtn");
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

  // log user in by verifying data in mysql and directing them to home page

  function loginUser() {
    const usernameInput = document.getElementById('usernameInput');
    const passwordInput = document.getElementById('passwordInput');
    
    const username = usernameInput.value;
    const password = passwordInput.value;

    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    })
    .then(response => {
      if (response.ok) {
        // Redirect to the home page or perform any other action upon successful login
        window.location.href = '/';
      } else if (response.status === 401) {
        alert('Invalid credentials');
      } else {
        throw new Error('Login failed');
      }
    })
    .catch(error => {
      console.error(error);
      alert('Login failed');
    });
  }
      
      // register new users
  function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
  }

  function addUser() {
    

    const firstNameInput = document.getElementById('registerFirstName');
    const lastNameInput = document.getElementById('registerLastName');
    const passwordInput = document.getElementById('registerNewPwd');
    const emailInput = document.getElementById('registerNewEmail');
    const usernameInput = document.getElementById('registerUsername');

    const username = usernameInput.value;
    const firstname = firstNameInput.value;
    const lastname = lastNameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;




  fetch('/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({username, firstname, lastname, email, password})
  })
  .then(response => {
    // console.log('Response:', response);
    // console.log('Status:', response.status)
    // console.log('response');
    return response.json();
  })
  
  .then(data => {
    console.log('Response data:', data);
    alert('Account Successfully Created!');
    // if (response.status === 200) {
    //   // Redirect to the home page or perform any other action upon successful login
    //   window.location.href = '/';
    // } else if (response.status === 401) {
    //   alert('Invalid entries');
    // } else {
    //   throw new Error('Registration failed');
    // }
  })
  .catch(error => {
    console.error(error);
    alert('Registration Failed');
  });
}

