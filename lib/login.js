"use strict";
const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
        alert("Login successful!");
        localStorage.setItem("loggedInUser", username);
        window.location.href = "index.html";
    }
    else {
        alert("Invalid username or password. Please try again.");
    }
});
