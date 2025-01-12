const paragraph = document.querySelector("main p") as HTMLParagraphElement;
const username = localStorage.getItem("loggedInUser");

if (username) {
  paragraph.textContent = `Bienvenue, ${username}!`;

} else {
  paragraph.textContent = "Pour accéder à vos tâches, veuillez vous connecter ou vous inscrire.";
}

const todoListSection = document.getElementById("todolist") as HTMLElement;
const taskForm = document.getElementById("task-form") as HTMLFormElement;
const taskList = document.getElementById("tasks") as HTMLUListElement;

const currentUser = localStorage.getItem("loggedInUser");

let tasks: Array<{ title: string; description: string; deadline: string; status: string }> =
  currentUser ? JSON.parse(localStorage.getItem(`tasks_${currentUser}`) || "[]") : [];

function saveTasks() {
  if (currentUser) {
    localStorage.setItem(`tasks_${currentUser}`, JSON.stringify(tasks));
  }
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <p>Date limite : ${task.deadline}</p>
      <p>Statut : ${task.status}</p>
      <button class="complete-task" data-index="${index}">Marquer comme terminé</button>
      <button class="delete-task" data-index="${index}">Supprimer</button>
    `;
    taskList.appendChild(taskItem);
  });
}

if (currentUser) {
  paragraph.textContent = `Bienvenue, ${currentUser}!`; 
  todoListSection.classList.remove("hidden"); 

  renderTasks();
} else {
  todoListSection.classList.add("hidden"); 
  paragraph.textContent = "Pour accéder à vos tâches, veuillez vous connecter ou vous inscrire.";
}

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = (document.getElementById("task-title") as HTMLInputElement).value;
  const description = (document.getElementById("task-desc") as HTMLTextAreaElement).value;
  const deadline = (document.getElementById("task-deadline") as HTMLInputElement).value;

  tasks.push({ title, description, deadline, status: "En attente" });
  saveTasks();
  renderTasks();

  taskForm.reset(); 
});

taskList.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;

  if (target.classList.contains("complete-task")) {
    const index = parseInt(target.dataset.index || "0", 10);
    tasks[index].status = "Terminé";
    saveTasks();
    renderTasks();
  }

  if (target.classList.contains("delete-task")) {
    const index = parseInt(target.dataset.index || "0", 10);
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
  }
});
