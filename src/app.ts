
const logoutButton = document.getElementById("logout-button");

if (logoutButton) {
  logoutButton.addEventListener("click", () => {

    localStorage.removeItem("loggedInUser");

    alert("Vous avez été déconnecté.");
    window.location.href = "login.html";
  });
}
