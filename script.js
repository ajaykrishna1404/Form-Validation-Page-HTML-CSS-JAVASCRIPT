document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  let isValid = true;

  clearErrors();

  // Name Validation
  if (name.value.trim() === "") {
    showError(name, "Name is required");
    isValid = false;
  }

  // Email Validation
  if (email.value.trim() === "") {
    showError(email, "Email is required");
    isValid = false;
  } else if (!isValidEmail(email.value)) {
    showError(email, "Enter a valid email");
    isValid = false;
  }

  // Password Validation
  if (password.value.length < 6) {
    showError(password, "Password must be at least 6 characters");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    // Here you can submit the form using fetch/AJAX if needed
    // Or reset the form
    document.getElementById("signupForm").reset();
  }
});

function showError(input, message) {
  const error = input.nextElementSibling;
  error.innerText = message;
}

function clearErrors() {
  const errors = document.querySelectorAll(".error");
  errors.forEach((el) => (el.innerText = ""));
}

function isValidEmail(email) {
  // Basic regex for email validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}