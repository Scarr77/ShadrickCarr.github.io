/* ===============================
   SMOOTH SCROLL NAVIGATION
================================ */
document.querySelectorAll("[data-target]").forEach(item => {
  item.addEventListener("click", () => {
    document
      .getElementById(item.dataset.target)
      .scrollIntoView({ behavior: "smooth" });
  });
});

/* ===============================
   HERO TEXT ROTATION
================================ */
const phrases = [
  "I build systems, not shortcuts.",
  "I learn by rebuilding environments.",
  "Creative thinking backed by infrastructure.",
  "Iteration over imitation."
];

let phraseIndex = 0;
setInterval(() => {
  const el = document.getElementById("dynamic-line");
  if (el) {
    el.textContent = phrases[phraseIndex];
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }
}, 3000);

/* ===============================
   SCROLL REVEAL
================================ */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

/* ===============================
   SCROLL PROGRESS BAR
================================ */
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  document.getElementById("progress-bar").style.width = `${progress}%`;
});

/* ===============================
   NAVBAR SHRINK ON SCROLL
================================ */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});

/* ===============================
   MOBILE MENU TOGGLE
================================ */
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

/* ===============================
   ACTIVE NAV LINK
================================ */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 140) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.dataset.target === current) {
      link.classList.add("active");
    }
  });
});
