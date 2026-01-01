// Smooth scroll navigation
document.querySelectorAll("[data-target]").forEach(el => {
  el.addEventListener("click", () => {
    const target = document.getElementById(el.dataset.target);
    if (target) target.scrollIntoView({ behavior: "smooth" });

    const navMenu = document.getElementById("nav-menu");
    if (navMenu) navMenu.classList.remove("open");
  });
});

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.15 });

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

// Scroll progress bar
window.addEventListener("scroll", () => {
  const bar = document.getElementById("progress-bar");
  if (!bar) return;

  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  bar.style.width = `${(scrollTop / docHeight) * 100}%`;
});

// Mobile menu toggle
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle?.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Active nav highlighting
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 150) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle("active", link.dataset.target === current);
  });
});

// Phrase rotator
const phrases = [
  "I build systems, not shortcuts.",
  "I learn by rebuilding environments.",
  "Creative thinking backed by infrastructure.",
  "Iteration over imitation."
];

let phraseIndex = 0;
const dynamicLine = document.getElementById("dynamic-line");

if (dynamicLine) {
  setInterval(() => {
    dynamicLine.textContent = phrases[phraseIndex];
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }, 3000);
}

// Hero parallax
const heroParallax = document.querySelector(".hero-parallax");
window.addEventListener("scroll", () => {
  if (!heroParallax) return;
  heroParallax.style.transform =
    `translateY(${window.scrollY * 0.15}px)`;
});

// Spectrum reacts to scroll
const spectrumBars = document.querySelectorAll(".nav-spectrum span");
window.addEventListener("scroll", () => {
  const speed = Math.max(0.5, 1.2 - window.scrollY / 1200);
  spectrumBars.forEach(bar => {
    bar.style.animationDuration = `${speed}s`;
  });
});

// Pause spectrum when tab inactive
document.addEventListener("visibilitychange", () => {
  const state = document.hidden ? "paused" : "running";
  spectrumBars.forEach(bar => {
    bar.style.animationPlayState = state;
  });
});

// Contact form (Formspree)
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

if (form && status) {
  form.addEventListener("submit", async e => {
    e.preventDefault();
    status.textContent = "Sending…";

    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" }
      });

      status.textContent = res.ok
        ? "Message sent. I’ll be in touch."
        : "Something went wrong. Try again.";

      if (res.ok) form.reset();
    } catch {
      status.textContent = "Network error. Try again later.";
    }
  });
}
