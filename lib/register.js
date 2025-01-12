"use strict";
const signupForm = document.getElementById("signup-form");
signupForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("signup-username").value;
    const password = document.getElementById("signup-password").value;
    if (localStorage.getItem(username)) {
        alert("Username already exists. Please choose another one.");
        return;
    }
    localStorage.setItem(username, password);
    alert("Account created successfully!");
    window.location.href = "login.html";
});
