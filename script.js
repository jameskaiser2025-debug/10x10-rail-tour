const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#main-nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }));
}
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// Four visual palettes from the Kaiser Solzie website design reference.
const themeButtons = [...document.querySelectorAll("[data-theme-choice]")];
const allowedThemes = ["industrial","warped","vinyl","zine"];
function setTheme(theme) {
  const selected = allowedThemes.includes(theme) ? theme : "industrial";
  document.body.dataset.theme = selected;
  themeButtons.forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.themeChoice === selected));
  });
  try { localStorage.setItem("kaiser-solzie-theme", selected); } catch (_) {}
}
let savedTheme = "industrial";
try { savedTheme = localStorage.getItem("kaiser-solzie-theme") || "industrial"; } catch (_) {}
setTheme(savedTheme);
themeButtons.forEach(button => button.addEventListener("click", () => setTheme(button.dataset.themeChoice)));
