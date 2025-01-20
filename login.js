const validUsername = "admin";
const validPassword = "password123";

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
        window.location.href = "index.html"; // Redirect to the home page
    } else {
        alert("Invalid username or password. Please try again.");
    }
});
