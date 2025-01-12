const loginForm = document.getElementById("login-form") as HTMLFormElement;

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = (document.getElementById("login-username") as HTMLInputElement).value;
  const password = (document.getElementById("login-password") as HTMLInputElement).value;

  const storedPassword = localStorage.getItem(username);
  if (storedPassword === password) {
    alert("Login successful!");
    localStorage.setItem("loggedInUser", username);

    window.location.href = "index.html";
  } else {
    alert("Nom d'utilisateur ou mot de passe invalide. Veuillez réessayer.");
  }
});