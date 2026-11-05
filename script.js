
// MENU DO CELULAR
function toggleMenu() {
  document.getElementById("nav").classList.toggle("show");
}

// FECHAR MENU AO CLICAR EM UM LINK
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav").classList.remove("show");
  });
});

// ABRIR E FECHAR MÓDULOS
document.querySelectorAll(".module-title").forEach(button => {
  button.addEventListener("click", () => {
    button.parentElement.classList.toggle("active");
  });
});

// PROGRESSO DAS AULAS
const checks = document.querySelectorAll(".lesson-check");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

const key = "digitalpro-progress";

try {
  const saved = JSON.parse(localStorage.getItem(key) || "[]");
  checks.forEach((check, index) => {
    check.checked = Boolean(saved[index]);
  });
} catch (error) {
  console.log("Progresso inicializado.");
}

function updateProgress() {
  const total = checks.length;
  const completed = [...checks].filter(c => c.checked).length;
  const percentage = Math.round(completed / total * 100);

  progressBar.style.width = percentage + "%";
  progressText.textContent = percentage + "%";

  localStorage.setItem(
    key,
    JSON.stringify([...checks].map(c => c.checked))
  );
}

checks.forEach(check => {
  check.addEventListener("change", updateProgress);
});

updateProgress();

// ANO AUTOMÁTICO
document.getElementById("year").textContent =
  new Date().getFullYear();
