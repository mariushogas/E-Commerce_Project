const loginRegisterForm = document.querySelector(".loginRegisterForm");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".logIn-Cart .btnLogin-popup");
const iconClose = document.querySelector(".icon-close");

btnPopup.addEventListener("click", () => {
  loginRegisterForm.classList.add("active-popup");
});

iconClose.addEventListener("click", () => {
  loginRegisterForm.classList.remove("active-popup");
});

loginLink.addEventListener("click", () => {
  loginRegisterForm.classList.remove("active");
});

registerLink.addEventListener("click", () => {
  loginRegisterForm.classList.add("active");
});

// REGISTER FORM VALIDATION

const form = document.getElementById("form");
const logInBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

//  Prevent the form from submitting for validate our inputs
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateRegisterInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement; // .input-box
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

// regular expressions to validate the email at the client-side of a web application
const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const validateRegisterInputs = () => {
  // get the values from the inputs
  const userNameValue = username.value.trim(); // "trim" remove all the white spaces that the string have
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (userNameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    re;
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 4) {
    setError(password, "Password must be at least 4 character");
  } else {
    setSuccess(password);
  }
};

registerBtn.addEventListener("click", (e) => {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let userInfo = JSON.parse(localStorage.getItem("usersName"));
  if (!userInfo) {
    userInfo = [];
  }

  if (
    userInfo.some((v) => {
      return v.email === email || v.username === username;
    })
  ) {
    alert("Duplicate Data");
  } else {
    userInfo.push({
      username: username,
      email: email,
      password: password,
    });
  }

  localStorage.setItem("usersName", JSON.stringify(userInfo));
  console.log("user add");
});

logInBtn.addEventListener("click", (e) => {
  // e.preventDefault();

  const email = document.getElementById("emailLogin").value;
  const password = document.getElementById("passwordLogin").value;
  const logInError = document.querySelector(".loginError");
  const helloToUser = document.querySelector(".helloUser");
  const helloMessage = document.querySelector(".helloUser p");

  let userInfo = JSON.parse(localStorage.getItem("usersName"));

  if (
    userInfo.some((v) => {
      return v.email == email && v.password == password;
    })
  ) {
    // collect current session data
    const currentUser = userInfo.filter((v) => {
      return v.email == email && v.password == password;
    })[0];
    // // set the value of name and email in local storage for future use
    localStorage.setItem("name", currentUser.username);
    localStorage.setItem("email", currentUser.email);

    btnPopup.addEventListener("mouseover", () => {
      helloToUser.classList.add("active-hello");
      // const activeHello = document.querySelector(".hello");
      const name = localStorage.getItem("name");
      helloMessage.innerHTML =
        "Hello" + " " + name + " ! <br> You are logged in !";
    });
    btnPopup.addEventListener("mouseout", () => {
      helloToUser.classList.remove("active-hello");
    });

    helloToUser.addEventListener("mouseover", () => {
      helloToUser.classList.add("active-hello");
    });
    helloToUser.addEventListener("mouseout", () => {
      helloToUser.classList.remove("active-hello");
    });

    // //redirect to profile page
    // window.location.href = "index.html";
  } else {
    logInError.classList.add("active-error");
    const activetext = document.querySelector(".active-error");
    activetext.innerHTML = "Incorrect email or password !";
  }
});

// Eye-Slash Toggle

const toggleLog = document.querySelector(".form-box .toggleLog");
const toggleReg = document.querySelector(".form-box .toggleReg");
const inputPass = document.getElementById("passwordLogin");
const inputPassword = document.getElementById("password");

toggleLog.addEventListener("click", (e) => {
  if (inputPass.type === "password") {
    inputPass.type = "text";
    e.target.classList.add("fa-eye"); // e.target is what is clicked (icon)
    e.target.classList.remove("fa-eye-slash");
  } else {
    inputPass.type = "password";
    e.target.classList.add("fa-eye-slash");
    e.target.classList.remove("fa-eye");
  }
});
toggleReg.addEventListener("click", (e) => {
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
    e.target.classList.add("fa-eye"); // e.target is what is clicked (icon)
    e.target.classList.remove("fa-eye-slash");
  } else {
    inputPassword.type = "password";
    e.target.classList.add("fa-eye-slash");
    e.target.classList.remove("fa-eye");
  }
});
