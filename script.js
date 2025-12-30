// Smooth scroll
document.querySelectorAll("[data-target]").forEach(el => {
  el.addEventListener("click", () => {
    document.getElementById(el.dataset.target)
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Scroll progress bar
window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const height = document.body.scrollHeight - window.innerHeight;
  document.getElementById("progress-bar").style.width =
    `${(scrolled / height) * 100}%`;
});

// Active nav
const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    if (scrollY >= sec.offsetTop - 150) current = sec.id;
  });
  links.forEach(link =>
    link.classList.toggle("active", link.dataset.target === current)
  );
});

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Dynamic hero text
const phrases = [
  "I build systems, not shortcuts.",
  "I learn by rebuilding environments.",
  "Creative thinking backed by infrastructure.",
  "Iteration over imitation."
];

let i = 0;
const dynamicLine = document.getElementById("dynamic-line");

setInterval(() => {
  dynamicLine.textContent = phrases[i];
  i = (i + 1) % phrases.length;
}, 3000);
