// ===============================
// Smooth scroll navigation
// ===============================
document.querySelectorAll("[data-target]").forEach(el => {
  el.addEventListener("click", () => {
    const target = document.getElementById(el.dataset.target);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    const navMenu = document.getElementById("nav-menu");
    if (navMenu) navMenu.classList.remove("open");
  });
});

// ===============================
// Scroll reveal
// ===============================
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

// ===============================
// Scroll progress bar
// ===============================
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const bar = document.getElementById("progress-bar");

  if (bar) {
    bar.style.width = `${(scrollTop / docHeight) * 100}%`;
  }
});

// ===============================
// Mobile menu toggle
// ===============================
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
}

// ===============================
// Active nav highlighting
// ===============================
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
    link.classList.remove("active");
    if (link.dataset.target === current) {
      link.classList.add("active");
    }
  });
});

// ===============================
// Phrase rotator
// ===============================
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

// ===============================
// Contact form (Formspree + fun feedback)
// ===============================
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

const messages = [
  "Message sent. I like the way you think.",
  "Sent. This could be interesting.",
  "Delivered. Let’s build.",
  "Got it. I’ll be in touch.",
  "Transmission successful."
];

if (form && status) {
  status.setAttribute("aria-live", "polite");

  form.addEventListener("submit", async e => {
    e.preventDefault();

    status.textContent = "Sending…";

    const submitBtn = form.querySelector("button[type='submit']");
    submitBtn.disabled = true;

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        const msg = messages[Math.floor(Math.random() * messages.length)];
        status.textContent = msg;
        form.reset();
        submitBtn.disabled = false;
      } else {
        status.textContent = "Something went wrong. Try again.";
        submitBtn.disabled = false;
      }
    } catch (err) {
      status.textContent = "Network error. Please try later.";
      submitBtn.disabled = false;
    }
  });
}

window.addEventListener("scroll", () => {
  const speed = Math.max(0.4, 1 - window.scrollY / 1500);
  document
    .querySelectorAll(".nav-spectrum span")
    .forEach(bar => {
      bar.style.animationDuration = `${speed}s`;
    });
});
