// Smooth scroll
document.querySelectorAll("[data-target]").forEach(item => {
  item.addEventListener("click", () => {
    document.getElementById(item.dataset.target)
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Scroll progress bar
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  document.getElementById("progress-bar").style.width =
    `${(scrollTop / docHeight) * 100}%`;
});

// Active nav highlight
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 150) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle("active", link.dataset.target === current);
  });
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
setInterval(() => {
  document.getElementById("dynamic-line").textContent = phrases[i];
  i = (i + 1) % phrases.length;
}, 3000);
