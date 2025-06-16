document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Placeholder — replace with backend API call
  if (username === "admin" && password === "1234") {
    document.getElementById("message").textContent = "Login successful!";
  } else {
    document.getElementById("message").textContent = "Invalid credentials.";
  }
});

