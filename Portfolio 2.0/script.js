const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

function toggler() {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
}
burger.addEventListener("click", toggler);

function teleport() {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
}

links.forEach((link) => {
  link.addEventListener("click", teleport);
});
