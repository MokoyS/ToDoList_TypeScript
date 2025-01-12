
const signupForm = document.getElementById("signup-form") as HTMLFormElement;

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = (document.getElementById("signup-username") as HTMLInputElement).value;
  const password = (document.getElementById("signup-password") as HTMLInputElement).value;

  if (localStorage.getItem(username)) {
    alert("Le nom d'utilisateur existe déjà. Veuillez en choisir un autre.");
    return;
  }

  localStorage.setItem(username, password);
  alert("Compte créé avec succès !");

  window.location.href = "login.html";
});
