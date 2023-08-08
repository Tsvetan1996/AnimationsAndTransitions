const loginContainer = document.getElementById("loginContainer");
const registerContainer = document.getElementById("registerContainer");
const toggleFormButton = document.getElementById("toggleFormButton");
const toggleLoginFormButton = document.getElementById("toggleLoginFormButton");

toggleFormButton.addEventListener("click", () => {
  const isLoginVisible = loginContainer.style.display !== "none";
  if (isLoginVisible) {
    loginContainer.style.animation = "slideLeftFadeOut 0.5s forwards";
    setTimeout(() => {
      loginContainer.style.display = "none";
      registerContainer.style.display = "block";
      registerContainer.style.animation = "fadeInSlideLeft 0.5s forwards";
    }, 500); // After login form slides and fades out
  } else {
    registerContainer.style.animation = "slideLeftFadeOut 0.5s forwards";
    setTimeout(() => {
      registerContainer.style.display = "none";
      loginContainer.style.display = "block";
      loginContainer.style.animation = "fadeInSlideLeft 0.5s forwards";
    }, 500); // After register form slides and fades out
  }
});

toggleLoginFormButton.addEventListener("click", () => {
  registerContainer.style.animation = "slideLeftFadeOut 0.5s forwards";
  loginContainer.style.animation = "fadeInSlideLeft 0.5s forwards";
  setTimeout(() => {
    registerContainer.style.display = "none";
    loginContainer.style.display = "block";
  }, 500); // After animation, hide register form
});

const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popupMessage");
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  showPopup();
});

function showPopup() {
  popup.style.display = "block";
  popupMessage.style.animation = "fadeIn 0.5s ease-in-out forwards";
  setTimeout(() => {
    popup.style.display = "none";
    popupMessage.style.animation = ""; // Reset animation
  }, 3000); // Popup will disappear after 3 seconds
}

// login logic and error handling

const loginForm = document.getElementById("loginForm"); 
const emailInput = document.getElementById("email"); 
const passwordInput = document.getElementById("pwd");
const loginButton = document.querySelector("#loginForm button");

loginButton.addEventListener("click", (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  if (!email || !password) {
    if (!email) {
      emailInput.classList.add("input-error");
    } else {
      emailInput.classList.remove("input-error");
    }
    if (!password) {
      passwordInput.classList.add("input-error");
    } else {
      passwordInput.classList.remove("input-error");
    }
  } else {
    emailInput.classList.remove("input-error");
    passwordInput.classList.remove("input-error");

    window.location.href = "./dashboard.html";
  }
});

// starry sky
document
  .querySelector(".navigate-button")
  .addEventListener("click", function () {
    window.location.href = "starry-sky.html";
  });
