"use strict";
const logoutButton = document.getElementById("logout-button");
if (logoutButton) {
    logoutButton.addEventListener("click", () => {
        localStorage.removeItem("loggedInUser");
        alert("You have been logged out.");
        window.location.href = "login.html";
    });
}
